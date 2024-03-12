import { Card, Grid, Skeleton } from "@mui/material";

function AuthorsPageSkeleton({ quantity }) {
  return Array(quantity)
    .fill(0)
    .map((_, i) => (
      <Grid item key={i} xs={12} sm={6} md={4}>
        <Card
          sx={{
            boxShadow: "rgba(0 , 0 , 0 , 0.1) 0 4px 12px",
            borderRadius: 4,
            padding: 4,
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Skeleton
              animation="wave"
              variant="circular"
              width={80}
              height={80}
              sx={{ margin: "10px auto 30px auto" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Skeleton
              animation="wave"
              height={10}
              width="80%"
              style={{ marginBottom: 6 }}
            />
            <Skeleton
              animation="wave"
              height={10}
              width="80%"
              style={{ marginBottom: 6 }}
            />
            <Skeleton
              animation="wave"
              height={10}
              width="80%"
              style={{ marginBottom: 6 }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "10px",
            }}
          >
            <Skeleton
              animation="wave"
              height={10}
              width="50%"
              style={{ marginBottom: 6 }}
            />
            <Skeleton
              animation="wave"
              height={10}
              width="30%"
              style={{ marginBottom: 6 }}
            />
          </div>
          <div style={{ marginTop: "40px" }}>
            <Skeleton
              variant="rounded"
              height={20}
              sx={{ margin: 2, borderRadius: 4 }}
            />
          </div>
        </Card>
      </Grid>
    ));
}

export default AuthorsPageSkeleton;
