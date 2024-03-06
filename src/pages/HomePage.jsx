import { Container, Typography, Grid } from "@mui/material";

//Components
import Blogs from "../components/Blogs";
import Authors from "../components/Authors";

function HomePage() {
  return (
    <Container>
      <Grid container spacing={3} mt={4} padding={3}>
        <Grid item xs={12} md={3}>
          <Typography component="h3" variant="h5" mb={3} fontWeight={700}>
            نویسنده ها
          </Typography>
          <Authors />
        </Grid>
        <Grid item xs={12} md={9}>
          <Typography component="h3" variant="h5" mb={3} fontWeight={700}>
            مقالات
          </Typography>
          <Blogs />
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomePage;
