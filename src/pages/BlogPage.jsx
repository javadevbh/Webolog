import { useParams, Link, useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { GET_BLOG_INFO } from "../graphql/queries";
import { LIKE_BLOG } from "../graphql/mutations";
import sanitizeHtml from "sanitize-html";
import { useScrollToTop } from "../hooks/useScrollToTop";
import {
  Container,
  Typography,
  Grid,
  Avatar,
  Box,
  Skeleton,
  Button,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { TailSpin } from "react-loader-spinner";

//Components
import CommentForm from "../components/CommentForm";
import Comments from "../components/Comments";

//Skeleton loader
import BlogPageSkeleton from "../components/loader/BlogPageSkeleton";

function BlogPage() {
  useScrollToTop();
  const { slug } = useParams();
  const navigate = useNavigate();
  const { loading, data, error } = useQuery(GET_BLOG_INFO, {
    variables: { slug },
  });

  const [likeBlog, { loading: likeLoading, data: likeData, error: likeError }] =
    useMutation(LIKE_BLOG, {
      variables: { slug, likesCount: 1 },
    });

  const likeBlogHandler = () => {
    likeBlog();
  };

  if (error) return <p>{error}</p>;

  return (
    <Container maxWidth="lg">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          margin: "20px 0",
        }}
      >
        <Link
          to="/"
          style={{ textDecoration: "none", color: "rgba(0 , 0 , 0 , 0.7)" }}
        >
          خانه
        </Link>
        <ArrowBackIosIcon fontSize="12px" />
        <Link
          to="/blogs"
          style={{
            textDecoration: "none",
            color: "rgba(0 , 0 , 0 , 0.7)",
            marginRight: "8px",
          }}
        >
          وبلاگ ها
        </Link>
        <ArrowBackIosIcon fontSize="12px" />
        <Typography component="p" variant="p" mr={1} color="text.secondary">
          {loading ? (
            <Skeleton animation="wave" height={10} width="100px" />
          ) : (
            data.post.title
          )}
        </Typography>
      </div>
      <Grid container my={4} gap={4}>
        {loading ? (
          <BlogPageSkeleton />
        ) : (
          <>
            <Grid
              xs={12}
              item
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 2,
              }}
            >
              <Typography
                component="h2"
                variant="h4"
                color="primary"
                fontWeight={700}
              >
                {data.post.title}
              </Typography>
              <ArrowBackRoundedIcon
                sx={{ cursor: "pointer" }}
                onClick={() => navigate(-1)}
              />
            </Grid>
            <Grid item xs={12}>
              <img
                src={data.post.coverPhoto.url}
                alt={data.post.slug}
                width="100%"
                style={{ borderRadius: 15 }}
              />
            </Grid>
            <Grid item xs={12} display="flex" alignItems="center" gap={2}>
              <Avatar
                src={data.post.author.avatar.url}
                sx={{ width: 80, height: 80 }}
              />
              <Box component="div">
                <Typography component="p" variant="h5" fontWeight={700}>
                  {data.post.author.name}
                </Typography>
                <Typography component="p" variant="p" color="text.secondary">
                  {data.post.author.field}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <div
                dangerouslySetInnerHTML={{
                  __html: sanitizeHtml(data.post.content.html),
                }}
              ></div>
            </Grid>
          </>
        )}
        <Grid item xs={12}>
          <Box component="div" display="flex" alignItems="center">
            <Typography component="p" variant="p">
              مقاله رو دوست داشتی؟
            </Typography>
            <Button onClick={likeBlogHandler}>
              <FavoriteIcon />
              {likeLoading ? (
                <TailSpin
                  width="20"
                  height="20"
                  color="#1976d2"
                  wrapperStyle={{ marginRight: "10px" }}
                />
              ) : (
                <Typography component="span" variant="span" mr="4px">
                  {!likeData ? "لایک " : "لایک شد"}
                </Typography>
              )}
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <CommentForm slug={slug} />
        </Grid>
        <Grid item xs={12}>
          <Comments slug={slug} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default BlogPage;
