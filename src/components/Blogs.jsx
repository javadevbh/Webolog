import { Grid } from "@mui/material";

//GraphQL
import { useQuery } from "@apollo/client";
import { GET_BLOGS_INFO } from "../graphql/queries";

//Components
import BlogCard from "./BlogCard";

function Blogs() {
  const { loading, data, error } = useQuery(GET_BLOGS_INFO);

  if (loading) return <h4>Loading...</h4>;
  if (error) return <h4>{error.message}</h4>;
  return (
    <Grid container spacing={2}>
      {data.posts.map((post) => (
        <Grid item key={post.id} xs={12} sm={6} md={4}>
          <BlogCard {...post} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Blogs;
