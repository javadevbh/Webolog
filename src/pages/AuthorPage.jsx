import { useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_AUTHOR_INFO } from "../graphql/queries";
import sanitizeHtml from "sanitize-html";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { Avatar, Container, Grid, Skeleton, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

//Components
import BlogCard from "../components/BlogCard";

//Skeleton loader
import AuthorPageSkeleton from "../components/loader/AuthorPageSkeleton";

function AuthorPage() {
  useScrollToTop();
  const { slug } = useParams();
  const { loading, data, error } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug },
  });

  if (error) return <h4>{error.message}</h4>;

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
          to="/authors"
          style={{
            textDecoration: "none",
            color: "rgba(0 , 0 , 0 , 0.7)",
            marginRight: "8px",
          }}
        >
          نویسنده ها
        </Link>
        <ArrowBackIosIcon fontSize="12px" />
        <Typography component="p" variant="p" mr={1} color="text.secondary">
          {loading ? (
            <Skeleton animation="wave" height={10} width="100px" />
          ) : (
            data.author.name
          )}
        </Typography>
      </div>
      <Grid container my={4} gap={4}>
        {loading ? (
          <AuthorPageSkeleton />
        ) : (
          <>
            <Grid
              item
              xs={12}
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap={2}
            >
              <Avatar
                src={data.author.avatar.url}
                sx={{ width: 250, height: 250 }}
              />
              <Typography component="h3" variant="h5" fontWeight={700} mt={2}>
                {data.author.name}
              </Typography>
              <Typography component="p" variant="h5" color="text.secondary">
                {data.author.field}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography component="span">
                <div
                  dangerouslySetInnerHTML={{
                    __html: sanitizeHtml(data.author.description.html),
                  }}
                ></div>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography component="h3" variant="h5" fontWeight={700}>
                مقالات {data.author.name}
              </Typography>
              <Grid container spacing={2} mt={2}>
                {data.author.posts.map((post) => (
                  <Grid item key={post.id} xs={12} sm={6} md={4}>
                    <BlogCard {...post} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </>
        )}
      </Grid>
    </Container>
  );
}

export default AuthorPage;
