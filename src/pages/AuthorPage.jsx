import { useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_AUTHOR_INFO } from "../graphql/queries";
import sanitizeHTML from "sanitize-html";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

//Components
import BlogCard from "../components/BlogCard";

function AuthorPage() {
  const { slug } = useParams();
  const { loading, data, error } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug },
  });
  if (loading) return <h4>Loading...</h4>;
  if (error) return <h4>{error.message}</h4>;
  const {
    author: {
      avatar: { url },
      name,
      field,
      description: { html },
      posts,
    },
  } = data;
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
          style={{ textDecoration: "none", color: "rgba(0 , 0 , 0 , 0.7)" , marginRight : "8px" }}
        >
          نویسنده ها
        </Link>
        <ArrowBackIosIcon fontSize="12px" />
        <Typography component="p" variant="p" mr={1} color="text.secondary">
           {name}
        </Typography>
      </div>
      <Grid container mt={10} gap={4}>
        <Grid
          item
          xs={12}
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={2}
        >
          <Avatar src={url} sx={{ width: 250, height: 250 }} />
          <Typography component="h3" variant="h5" fontWeight={700} mt={2}>
            {name}
          </Typography>
          <Typography component="p" variant="h5" color="text.secondary">
            {field}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography component="span">
            <div dangerouslySetInnerHTML={{ __html: sanitizeHTML(html) }}></div>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography component="h3" variant="h5" fontWeight={700}>
            مقالات {name}
          </Typography>
          <Grid container spacing={2} mt={2}>
            {posts.map((post) => (
              <Grid item key={post.id} xs={12} sm={6} md={4}>
                <BlogCard {...post} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AuthorPage;
