import { gql } from "@apollo/client";

export const GET_USER = gql`
  query user {
    user {
      _id
      username
      email
      password
    }
  }
`;
