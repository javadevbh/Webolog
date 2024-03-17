import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../features//bookmarks/bookmarksSlice";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Grid,
  Box,
  Button,
  IconButton,
  Hidden,
} from "@mui/material";
import BookmarkRemoveRoundedIcon from "@mui/icons-material/BookmarkRemoveRounded";
import BookmarksRoundedIcon from "@mui/icons-material/BookmarksRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

function Bookmark() {
  const state = useSelector((store) => store.bookmarks);
  const dispatch = useDispatch();
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
          <Grid
            key={item.id}
            item
            xs={12}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            border="1px solid rgba(186, 104, 200 , 0.4)"
            p={2}
            borderRadius={2}
          >
            <Link to={`/blogs/${item.slug}`} style={{ lineHeight: "2px" }}>
              <img
                src={item.coverPhoto.url}
                alt={item.slug}
                style={{ width: "100px", borderRadius: 10 }}
              />
            </Link>
            <Typography component="h4" variant="p">
              {item.title}
            </Typography>
            <Box component="div" display="flex" alignItems="center" gap={1}>
              <Hidden smDown>
                <Link to={`/blogs/${item.slug}`}>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{ width: "100%", borderRadius: 3 }}
                  >
                    مشاهده مقاله
                  </Button>
                </Link>
              </Hidden>
              <IconButton onClick={() => dispatch(removeItem(item))}>
                <BookmarkRemoveRoundedIcon color="primary" />
              </IconButton>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Bookmark;
