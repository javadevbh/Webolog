import { Link } from "react-router-dom";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { Container, Typography, Grid, Box } from "@mui/material";

//Components
import Blogs from "../components/Blogs";
import Authors from "../components/Authors";

function HomePage() {
  useScrollToTop();
  return (
    <Container>
      <Grid container spacing={3} mt={4} padding={3}>
        <Grid item xs={12} md={3}>
          <Box
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "24px",
            }}
          >
            <Typography component="h3" variant="h5" fontWeight={700}>
              نویسنده ها
            </Typography>
            <Link to="authors" style={{ textDecoration: "none" }}>
              <Typography
                component="p"
                variant="p"
                color="text.secondary"
                fontWeight={500}
              >
                مشاهده همه
              </Typography>
            </Link>
          </Box>
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
