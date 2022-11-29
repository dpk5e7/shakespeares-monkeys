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

export const GET_USERS = gql`
  query users {
    users {
      _id
      username
      email
      is_admin
      is_locked
      last_login
    }
  }
`;
