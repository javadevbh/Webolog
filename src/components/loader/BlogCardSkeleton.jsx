import { Card, CardContent, CardHeader, Grid, Skeleton } from "@mui/material";

function BlogCardSkeleton({ quantity, md }) {
  return Array(quantity)
    .fill(0)
    .map((_, i) => (
      <Grid key={i} item xs={12} sm={6} md={md}>
        <Card
          sx={{
            boxShadow: "rgba(0 , 0 , 0 , 0.1) 0 4px 12px",
            borderRadius: 4,
            maxWidth: 345,
            m: 2,
          }}
        >
          <CardHeader
            avatar={
              <Skeleton
                animation="wave"
                variant="circular"
                width={40}
                height={40}
                sx={{ marginLeft: 1 }}
              />
            }
            title={
              <Skeleton
                animation="wave"
                height={10}
                width="80%"
                style={{ marginBottom: 6 }}
              />
            }
          />
          <Skeleton
            sx={{ height: 190 }}
            animation="wave"
            variant="rectangular"
          />
          <CardContent>
            <Skeleton animation="wave" height={10} />
          </CardContent>
          <Skeleton
            variant="rounded"
            height={20}
            sx={{ margin: 2, borderRadius: 4 }}
          />
        </Card>
      </Grid>
    ));
}

export default BlogCardSkeleton;
