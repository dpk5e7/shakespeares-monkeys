import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        is_admin
        is_locked
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

export const ADD_TEAM_MEMBER = gql`
  mutation addTeamMember(
    $name: String!
    $email: String
    $phoneNumber: String
    $mailingAddress: String
    $pocName: String
    $pocPhoneNumber: String
    $pocRelationship: String
  ) {
    addTeamMember(name: $name, email: $email, phoneNumber: $phoneNumber, mailingAddress: $mailingAddress, pocName: $pocName, pocPhoneNumber: $pocPhoneNumber, pocRelationship: $pocRelationship) {
      message
      user {
        _id
        username
      }
    }
  }
`;

export const EDIT_TEAM_MEMBER = gql`
  mutation editTeamMember(
    $id: ID!
    $name: String
    $email: String
    $phoneNumber: String
    $mailingAddress: String
    $pocName: String
    $pocPhoneNumber: String
    $pocRelationship: String
    $familySituation: String
    $notes: String
    $skills: [String]
    $responsibilities: [String]
    $personalInterests: [String]
    $training: [String]
    $dates: [String]
  ) {
    editTeamMember(
      id: $id
      name: $name
      email: $email
      phoneNumber: $phoneNumber
      mailingAddress: $mailingAddress
      pocName: $pocName
      pocPhoneNumber: $pocPhoneNumber
      pocRelationship: $pocRelationship
      familySituation: $familySituation
      notes: $notes
      skills: $skills
      responsibilities: $responsibilities
      personalInterests: $personalInterests
      training: $training
      dates: $dates
    ) {
      message
      user {
        _id
        username
      }
    }
  }
`;

export const DELETE_TEAM_MEMBER = gql`
  mutation deleteTeamMember($id: ID!) {
    deleteTeamMember(id: $id) {
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
        is_admin
        is_locked
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
        is_admin
        is_locked
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
        is_admin
        is_locked
      }
    }
  }
`;
