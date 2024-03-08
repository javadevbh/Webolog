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
} from "@mui/material";

function BlogCard({
  title,
  slug,
  coverPhoto: { url },
  author: { avatar, name },
}) {
  return (
    <Card
      sx={{ boxShadow: "rgba(0 , 0 , 0 , 0.1) 0 4px 12px", borderRadius: 4 }}
    >
      <CardHeader
        avatar={<Avatar src={avatar.url} sx={{ marginLeft: 1 }} />}
        title={
          <Typography component="p" variant="p" color="text.secondary">
            {name}
          </Typography>
        }
      />
      <CardMedia component="img" height={194} image={url} alt={slug} />
      <CardContent>
        <Typography component="h3" variant="h6" fontWeight={600}>
          {title}
        </Typography>
      </CardContent>
      <Divider variant="middle" sx={{ margin: "10px" }} />
      <CardActions>
        <Button
          variant="outlined"
          size="small"
          sx={{ width: "100%", borderRadius: 3 }}
        >
          مشاهده مقاله
        </Button>
      </CardActions>
    </Card>
  );
}

export default BlogCard;
