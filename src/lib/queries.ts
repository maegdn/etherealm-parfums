import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  {
    products(first: 6) {
      edges {
        node {
          id
          title
          handle
          images(first: 1) {
            edges {
              node {
                url
                altText
              }
            }
          }
        }
      }
    }
  }
`;
