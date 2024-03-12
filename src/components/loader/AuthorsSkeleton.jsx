import { Grid, Skeleton } from "@mui/material";

function AuthorsSkeleton({ quantity }) {
  return Array(quantity)
    .fill(0)
    .map((_, i) => (
      <Grid key={i} item xs={12} padding={2}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Skeleton
            animation="wave"
            variant="circular"
            width={40}
            height={40}
            sx={{ marginLeft: 1 }}
          />
          <Skeleton
            animation="wave"
            height={10}
            width="70%"
            style={{ marginBottom: 6 }}
          />
        </div>
      </Grid>
    ));
}

export default AuthorsSkeleton;
