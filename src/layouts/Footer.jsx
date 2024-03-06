import { AppBar, Container, Link, Typography } from "@mui/material";
import { lightBlue } from "@mui/material/colors";

function Footer() {
  return (
    <AppBar component="footer" variant="footer" position="static">
      <Container maxWidth="lg">
        <Typography
          component="p"
          variant="p"
          textAlign="center"
          padding={1}
          letterSpacing={1}
        >
          توسعه یافته توسط{" "}
          <Link
            href="https://github.com/javadevbh/"
            target="_blank"
            rel="noopener"
            color={lightBlue[200]}
            underline="none"
          >
            جواد
          </Link>{" "}
          با ❤️
        </Typography>
      </Container>
    </AppBar>
  );
}

export default Footer;
