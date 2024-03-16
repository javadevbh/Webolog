import { gql } from "@apollo/client";

const SEND_COMMENT = gql`
  mutation MyMutation(
    $name: String!
    $email: String!
    $text: String!
    $slug: String!
    $datePublished: Date!
  ) {
    createComment(
      data: {
        name: $name
        email: $email
        text: $text
        post: { connect: { slug: $slug } }
        datePublished: $datePublished
      }
    ) {
      id
    }
  }
`;

const LIKE_BLOG = gql`
  mutation MyMutation($slug: String!, $likesCount: Int!) {
    createLike(
      data: { post: { connect: { slug: $slug } }, likesCount: $likesCount }
    ) {
      id
    }
  }
`;

export { SEND_COMMENT, LIKE_BLOG };
