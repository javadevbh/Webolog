import { Link } from "react-router-dom";
import { Grid, Button } from "@mui/material";

//GraphQL
import { useQuery } from "@apollo/client";
import { GET_BLOGS_INFO } from "../graphql/queries";

//Components
import BlogCard from "./BlogCard";

//Skeleton loader
import BlogCardSkeleton from "./loader/BlogCardSkeleton";

function Blogs() {
  const { loading, data, error } = useQuery(GET_BLOGS_INFO, {
    variables: { quantity: 10 },
  });
  if (error) return <h4>{error.message}</h4>;
  return (
    <Grid container spacing={2}>
      {loading ? (
        <BlogCardSkeleton quantity={10} md={4} />
      ) : (
        data.posts.map((post) => (
          <Grid item key={post.id} xs={12} sm={6} md={4}>
            <BlogCard {...post} />
          </Grid>
        ))
      )}
      <Grid item xs={12} my={4} padding={0}>
        <Link to="/blogs">
          <Button variant="outlined" size="large" sx={{ width: "100%" }}>
            مشاهده همه
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
}

export default Blogs;
