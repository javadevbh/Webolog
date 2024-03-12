import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_AUTHORS_INFO } from "../graphql/queries";
import { Container, Grid, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

//Components
import AuthorCard from "../components/AuthorCard";

//Skeleton loader
import AuthorsPageSkeleton from "../components/loader/AuthorsPageSkeleton";

function AuthorsPage() {
  const { loading, data, error } = useQuery(GET_AUTHORS_INFO, {
    variables: { quantity: 50 },
  });
  if (error) return <h4>{error.message}</h4>;
  return (
    <Container maxWidth="lg">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          margin: "20px 0",
        }}
      >
        <Link
          to="/"
          style={{ textDecoration: "none", color: "rgba(0 , 0 , 0 , 0.7)" }}
        >
          خانه
        </Link>
        <ArrowBackIosIcon fontSize="12px" />
        <Typography component="p" variant="p" mr={1} color="text.secondary">
          نویسنده ها
        </Typography>
      </div>
      <Grid container my={4} spacing={2}>
        {loading ? (
          <AuthorsPageSkeleton quantity={6} />
        ) : (
          data.authors.map((author) => (
            <Grid item key={author.id} xs={12} sm={6} md={4}>
              <AuthorCard {...author} />
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
}

export default AuthorsPage;
