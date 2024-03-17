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
      datePublished
      coverPhoto {
        url
      }
      comments {
        name
      }
      likes {
        likesCount
      }
    }
  }
`;

const GET_BLOG_INFO = gql`
  query MyQuery($slug: String!) {
    post(where: { slug: $slug }) {
      id
      slug
      author {
        avatar {
          url
        }
        name
        field
      }
      content {
        html
      }
      title
      coverPhoto {
        url
      }
    }
  }
`;

const GET_BLOG_COMMENTS = gql`
  query MyQuery($slug: String!) {
    post(where: { slug: $slug }) {
      comments {
        name
        id
        text
        datePublished
      }
    }
  }
`;

const GET_AUTHORS_INFO = gql`
  query MyQuery($quantity: Int!) {
    authors(first: $quantity) {
      id
      name
      slug
      field
      description {
        markdown
      }
      avatar {
        url
      }
    }
  }
`;

const GET_AUTHOR_INFO = gql`
  query MyQuery($slug: String!) {
    author(where: { slug: $slug }) {
      avatar {
        url
      }
      name
      field
      description {
        html
      }
      posts {
        title
        id
        slug
        coverPhoto {
          url
        }
        comments {
          name
        }
        likes {
          likesCount
        }
      }
    }
  }
`;

export {
  GET_BLOGS_INFO,
  GET_BLOG_INFO,
  GET_BLOG_COMMENTS,
  GET_AUTHORS_INFO,
  GET_AUTHOR_INFO,
};
