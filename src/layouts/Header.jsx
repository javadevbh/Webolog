import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import BookIcon from "@mui/icons-material/Book";

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
          <Typography component="h1" variant="h5" fontWeight="700">
            وِبولاگ
          </Typography>
          <BookIcon />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
