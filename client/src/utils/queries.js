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

export const GET_TEAM_SKILLS = gql`
  query teamSkills {
    teamSkills {
      labels
      data
    }
  }
`;

export const GET_TEAM_RESPONSIBILITIES = gql`
  query teamResponsibilities {
    teamResponsibilities {
      labels
      data
    }
  }
`;

export const GET_TEAM_PERSONAL_INTERESTS = gql`
  query teamPersonalInterests {
    teamPersonalInterests {
      labels
      data
    }
  }
`;

export const GET_TEAM_UPCOMING_IMPORTANT_DATES = gql`
  query teamUpcomingImportantDates {
    teamUpcomingImportantDates {
      importantDate
      description
    }
  }
`;
