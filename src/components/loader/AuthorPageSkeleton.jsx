import { Grid, Skeleton } from "@mui/material";

function AuthorPageSkeleton() {
  return (
    <>
      <Grid
        item
        xs={12}
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={2}
      >
        <Skeleton
          animation="wave"
          variant="circular"
          width={250}
          height={250}
        />
        <Skeleton
          animation="wave"
          height={20}
          width="15%"
          style={{ marginBottom: 6, marginTop: 16 }}
        />
        <Skeleton
          animation="wave"
          height={20}
          width="20%"
          style={{ marginBottom: 6 }}
        />
      </Grid>
      <Grid item xs={12}>
        <Skeleton
          animation="wave"
          height={10}
          width="100%"
          style={{ marginBottom: 6, marginTop: 40 }}
        />
        <Skeleton
          animation="wave"
          height={10}
          width="100%"
          style={{ marginBottom: 6, marginTop: 16 }}
        />
        <Skeleton
          animation="wave"
          height={10}
          width="100%"
          style={{ marginBottom: 6, marginTop: 16 }}
        />
        <Skeleton
          animation="wave"
          height={10}
          width="100%"
          style={{ marginBottom: 6, marginTop: 16 }}
        />
        <Skeleton
          animation="wave"
          height={10}
          width="100%"
          style={{ marginBottom: 6, marginTop: 16 }}
        />
      </Grid>
    </>
  );
}

export default AuthorPageSkeleton;
