import { Link } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

//GraphQL
import { useQuery } from "@apollo/client";
import { GET_BLOGS_INFO } from "../graphql/queries";

//Components
import BlogCard from "../components/BlogCard";

function BlogsPage() {
  const { loading, data, error } = useQuery(GET_BLOGS_INFO, {
    variables: { quantity: 50 },
  });
  if (loading) return <h4>Loading...</h4>;
  if (error) return <h4>{error.message}</h4>;
  return (
    <>
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
        <Typography component="p" variant="p" mr={1} color="text.secondary">
          وبلاگ ها
        </Typography>
      </div>
      <Grid container gap={4} my={4} justifyContent="center">
        {data.posts.map((post) => (
          <Grid item key={post.id} xs={12} sm={6} md={3}>
            <BlogCard {...post} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default BlogsPage;
