import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import BookIcon from "@mui/icons-material/Book";
import { Link } from "react-router-dom";

function Header() {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
            <Typography component="h1" variant="h5" fontWeight="700">
              وِبولاگ
            </Typography>
          </Link>
          <Link
            to="/bookmarks"
            style={{ textDecoration: "none", color: "#fff", lineHeight: "2px" }}
          >
            <BookIcon />
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
