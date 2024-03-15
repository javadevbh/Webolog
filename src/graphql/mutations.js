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

export { SEND_COMMENT };
