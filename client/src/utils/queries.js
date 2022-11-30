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

export const GET_MY_TEAM = gql`
  query team {
    team {
      _id
      name
      contactInfo {
        email
        phoneNumber
        mailingAddress
      }
      emergencyPOC {
        name
        phoneNumber
        relationship
      }
      familySituation
      importantDates {
        importantDate
        description
      }
      experience
      skills
      responsibilities
      training
      personalInterests
      notes
    }
  }
`;
