import { gql } from "@apollo/client";

const GET_BLOGS_INFO = gql`
  query MyQuery {
    posts {
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

export { GET_BLOGS_INFO };
