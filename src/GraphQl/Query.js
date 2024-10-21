import { gql } from "@apollo/client";

// Query to get all product details including id, title, price, description, category, image, and rating
export const GET_ALL_PRODUCT_DETAILS = gql`
  query {
    getProducts {
      id,
      title,
      price,
      description,
      category,
      image,
      rating {
        rate,
        count
      }
    }
  }
`;

// Query to get basic product details including id, title, and image
export const GET_BASIC_DETAILS = gql`
  query {
    getProducts {
      id,
      title,
      image
    }
  }
`;
