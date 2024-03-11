import { Link } from "react-router-dom";
import {
  Avatar,
  Card,
  CardActions,
  Divider,
  Typography,
  Button,
} from "@mui/material";

//Helpers
import { shortenDescription } from "../helpers/helper";

function AuthorCard({
  name,
  slug,
  field,
  description: { markdown },
  avatar: { url },
}) {
  return (
    <Card
      sx={{
        boxShadow: "rgba(0 , 0 , 0 , 0.1) 0 4px 12px",
        borderRadius: 4,
        padding: 4,
        textAlign: "center",
      }}
    >
      <div>
        <Avatar
          src={url}
          sx={{ margin: "10px auto 30px auto", width: "80px", height: "80px" }}
        />
      </div>
      <div>
        <Typography component="p" variant="p" fontWeight={600} lineHeight={1.7}>
          {shortenDescription(markdown)}
        </Typography>
      </div>
      <div style={{ marginTop: "10px" }}>
        <Typography component="p" variant="p" color="primary" fontWeight={600}>
          {name}
        </Typography>
        <Typography component="p" variant="p" color="text.secondary">
          {field}
        </Typography>
      </div>
      <Divider variant="middle" sx={{ margin: "20px" }} />
      <CardActions>
        <Link to={`/authors/${slug}`} style={{ width: "100%" }}>
          <Button
            variant="outlined"
            size="medium"
            sx={{ width: "100%", borderRadius: 3 }}
          >
            اطلاعات نویسنده
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default AuthorCard;
