import { useDispatch, useSelector } from "react-redux";
import { useMutation } from "@apollo/client";
import { LIKE_BLOG } from "../graphql/mutations";
import { Box, Button, Grid, Typography } from "@mui/material";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import BookmarkAddRoundedIcon from "@mui/icons-material/BookmarkAddRounded";
import { TailSpin } from "react-loader-spinner";

//Redux actions
import { addItem, removeItem } from "../features/bookmarks/bookmarksSlice";

//Helpers
import { isBookmarked } from "../helpers/helper";

function BlogActions({ data, slug }) {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.bookmarks);
  let bookmarkBlog;

  if (data) bookmarkBlog = isBookmarked(state, data.post.id);

  const [likeBlog, { loading: likeLoading, data: likeData, error: likeError }] =
    useMutation(LIKE_BLOG, {
      variables: { slug, likesCount: 1 },
    });

  const likeBlogHandler = () => {
    likeBlog();
  };
  return (
    <Grid container>
      <Grid item xs={12} display="flex" alignItems="center" gap={1}>
        <Box component="div" display="flex" alignItems="center">
          <Typography component="p" variant="p">
            مقاله رو دوست داشتی؟
          </Typography>
          <Button onClick={likeBlogHandler}>
            {!likeData ? (
              <FavoriteBorderRoundedIcon />
            ) : (
              <FavoriteRoundedIcon />
            )}
            {likeLoading ? (
              <TailSpin
                width="20"
                height="20"
                color="#1976d2"
                wrapperStyle={{ marginRight: "10px" }}
              />
            ) : (
              <Typography component="span" variant="span" mr="4px">
                {!likeData ? "لایک " : "لایک شد"}
              </Typography>
            )}
          </Button>
        </Box>
        {bookmarkBlog ? (
          <Box
            component="div"
            display="flex"
            alignItems="center"
            onClick={() => dispatch(removeItem(data.post))}
          >
            <Button>
              <BookmarkAddRoundedIcon color="primary" />
              <Typography mr="4px">بوکمارک</Typography>
            </Button>
          </Box>
        ) : (
          <Box
            component="div"
            display="flex"
            alignItems="center"
            onClick={() => dispatch(addItem(data.post))}
          >
            <Button>
              <BookmarkAddOutlinedIcon color="primary" />
              <Typography mr="4px">بوکمارک</Typography>
            </Button>
          </Box>
        )}
      </Grid>
    </Grid>
  );
}

export default BlogActions;
