import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  Box,
  Button,
  Grid,
  Hidden,
  IconButton,
  Typography,
} from "@mui/material";
import BookmarkRemoveRoundedIcon from "@mui/icons-material/BookmarkRemoveRounded";

//Redux actions
import { removeItem } from "../features/bookmarks/bookmarksSlice";

function BookmarkCard({ data }) {
  const dispatch = useDispatch();
  const { coverPhoto, slug, title } = data;
  return (
    <Grid
      item
      xs={12}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      border="1px solid rgba(186, 104, 200 , 0.4)"
      p={2}
      borderRadius={2}
    >
      <Link to={`/blogs/${slug}`} style={{ lineHeight: "2px" }}>
        <img
          src={coverPhoto.url}
          alt={slug}
          style={{ width: "100px", borderRadius: 10 }}
        />
      </Link>
      <Typography component="h4" variant="p">
        {title}
      </Typography>
      <Box component="div" display="flex" alignItems="center" gap={1}>
        <Hidden smDown>
          <Link to={`/blogs/${slug}`}>
            <Button
              variant="outlined"
              size="small"
              sx={{ width: "100%", borderRadius: 3 }}
            >
              مشاهده مقاله
            </Button>
          </Link>
        </Hidden>
        <IconButton onClick={() => dispatch(removeItem(data))}>
          <BookmarkRemoveRoundedIcon color="primary" />
        </IconButton>
      </Box>
    </Grid>
  );
}

export default BookmarkCard;
