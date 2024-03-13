import { Grid, Skeleton } from "@mui/material";

function BlogPageSkeleton() {
  return (
    <>
      <Grid item xs={12} mt={2}>
        <Skeleton animation="wave" height={20} width="20%" />
      </Grid>
      <Grid item xs={12}>
        <Skeleton
          animation="wave"
          variant="rounded"
          height={500}
          sx={{ borderRadius: "15px" }}
        />
      </Grid>
    </>
  );
}

export default BlogPageSkeleton;
