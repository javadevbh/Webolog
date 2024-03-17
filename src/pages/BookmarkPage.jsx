import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, Typography, Grid, Button } from "@mui/material";
import BookmarksRoundedIcon from "@mui/icons-material/BookmarksRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

//Components
import BookmarkCard from "../components/BookmarkCard";

function BookmarkPage() {
  const state = useSelector((store) => store.bookmarks);
  const navigate = useNavigate();

  if (state.selectedItems == 0) {
    return (
      <Container maxWidth="lg" sx={{ minHeight: "1000px" }}>
        <Grid container my={4}>
          <Grid
            item
            xs={12}
            mt={5}
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={3}
          >
            <BookmarksRoundedIcon
              color="primary"
              sx={{ width: "60%", height: "30%" }}
            />
            <Typography component="h3" variant="h4" fontWeight={500}>
              هنوز بوکمارکی نداری!
            </Typography>

            <Button
              variant="contained"
              size="medium"
              sx={{ width: "150px" }}
              onClick={() => navigate(-1)}
            >
              صفحه قبل
              <ArrowBackRoundedIcon
                sx={{ width: "20px", marginRight: "5px" }}
              />
            </Button>
          </Grid>
        </Grid>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ minHeight: "1000px" }}>
      <Grid container my={4} gap={2}>
        {state.selectedItems.map((item) => (
          <BookmarkCard key={item.id} data={item} />
        ))}
      </Grid>
    </Container>
  );
}

export default BookmarkPage;
