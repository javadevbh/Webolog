import { useQuery } from "@apollo/client";
import { GET_BLOG_COMMENTS } from "../graphql/queries";
import { Typography, Grid, Box, Avatar } from "@mui/material";

function Comments({ slug }) {
  const { loading, data, error } = useQuery(GET_BLOG_COMMENTS, {
    variables: { slug },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <Grid
      container
      gap={2}
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0 4px 12px",
        borderRadius: 4,
        py: 2,
        px: 4,
      }}
    >
      <Grid item xs={12}>
        <Typography component="p" variant="h6" color="primary" fontWeight={700}>
          نظرات
        </Typography>
      </Grid>
      {data.post.comments.map((comment) => (
        <Grid
          key={comment.id}
          item
          xs={12}
          border="1px solid silver"
          borderRadius={4}
          p={2}
        >
          <Box component="div" display="flex" alignItems="center" mb={2}>
            <Avatar>{comment.name[0]}</Avatar>
            <Typography component="span" variant="p" mr={1}>
              {comment.name}
            </Typography>
          </Box>
          <Typography component="p" variant="p">
            {comment.text}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
}

export default Comments;
