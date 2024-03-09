import React from "react";
import { useParams } from "react-router-dom";

function AuthorPage() {
  const slug = useParams();
  console.log(slug);
  return <div>AuthorPage</div>;
}

export default AuthorPage;
