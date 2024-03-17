import { Link } from "react-router-dom";
import { convertDate } from "../helpers/helper";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
  Button,
  Box,
} from "@mui/material";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import FavoriteIcon from "@mui/icons-material/Favorite";

function BlogCard({
  title,
  slug,
  datePublished,
  coverPhoto: { url },
  author,
  comments,
  likes,
}) {
  return (
    <Card
      sx={{ boxShadow: "rgba(0 , 0 , 0 , 0.1) 0 4px 12px", borderRadius: 4 }}
    >
      {author && (
        <CardHeader
          avatar={<Avatar src={author.avatar.url} sx={{ marginLeft: 1 }} />}
          title={
            <Typography component="p" variant="p" color="text.primary">
              {author.name}
            </Typography>
          }
          subheader={
            <Typography component="p" variant="p" color="text.secondary">
              {convertDate(datePublished)}
            </Typography>
          }
        />
      )}
      <CardMedia component="img" height={194} image={url} alt={slug} />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "16px 16px 5px 16px",
          gap: 2,
        }}
      >
        <Typography component="h3" variant="h6" fontWeight={600}>
          {title}
        </Typography>
        <Box component="div" display="flex" alignItems="center" gap={1}>
          <Box component="div" display="flex" alignItems="center" gap="2px">
            <ModeCommentIcon color="disabled" fontSize="12px" />
            <Typography
              component="p"
              variant="span"
              fontSize="14px"
              color="text.secondary"
              mt="1px"
            >
              {comments.length}
            </Typography>
          </Box>
          <Box component="div" display="flex" alignItems="center" gap="2px">
            <FavoriteIcon
              color="disabled"
              fontSize="12px"
              sx={{ marginBottom: "4px" }}
            />
            <Typography
              component="p"
              variant="span"
              fontSize="14px"
              color="text.secondary"
            >
              {likes.length}
            </Typography>
          </Box>
        </Box>
      </CardContent>
      <Divider variant="middle" sx={{ margin: "10px" }} />
      <CardActions>
        <Link to={`/blogs/${slug}`} style={{ width: "100%" }}>
          <Button
            variant="outlined"
            size="small"
            sx={{ width: "100%", borderRadius: 3 }}
          >
            مشاهده مقاله
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default BlogCard;
