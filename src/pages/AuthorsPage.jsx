import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_AUTHORS_INFO } from "../graphql/queries";
import { Grid, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

//Components
import AuthorCard from "../components/AuthorCard";

function AuthorsPage() {
  const { loading, data, error } = useQuery(GET_AUTHORS_INFO, {
    variables: { quantity: 50 },
  });
  if (loading) return <h4>Loading...</h4>;
  if (error) return <h4>{error.message}</h4>;
  return (
    <>
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
      <Grid container gap={4} my={4} justifyContent="center">
        {data.authors.map((author) => (
          <Grid item key={author.id} xs={12} sm={6} md={3}>
            <AuthorCard {...author} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default AuthorsPage;
