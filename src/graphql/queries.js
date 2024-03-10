import { gql } from "@apollo/client";

const GET_BLOGS_INFO = gql`
  query MyQuery($quantity: Int!) {
    posts(first: $quantity) {
      author {
        avatar {
          url
        }
        name
      }
      id
      title
      slug
      coverPhoto {
        url
      }
    }
  }
`;

const GET_AUTHORS_INFO = gql`
  query MyQuery {
    authors {
      id
      name
      slug
      avatar {
        url
      }
    }
  }
`;

export { GET_BLOGS_INFO, GET_AUTHORS_INFO };
