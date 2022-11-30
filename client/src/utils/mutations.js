import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($userId: ID!) {
    deleteUser(userId: $userId) {
      message
      user {
        _id
        username
      }
    }
  }
`;


export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const TOGGLE_ADMIN = gql`
  mutation toggleAdmin($userId: ID!) {
    toggleAdmin(userId: $userId) {
      message
      user {
        _id
        username
      }
    }
  }
`;

export const TOGGLE_LOCKED = gql`
  mutation toggleLocked($userId: ID!) {
    toggleLocked(userId: $userId) {
      message
      user {
        _id
        username
      }
    }
  }
`;
