const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar Date

  type User {
    _id: ID
    username: String
    email: String
    password: String
    is_admin: Boolean
    is_locked: Boolean
    last_login: Date
    teamMemberCount: Int
    team: [TeamMember]
  }

  type TeamMember {
    _id: ID
    name: String!
    contactInfo: ContactInfo
    emergencyPOC: EmergencyPOC
    familySituation: String
    importantDates: [ImportantDate]
    experience: String
    skills: [String]
    responsibilities: [String]
    training: [String]
    personalInterests: [String]
    notes: String
  }

  type ContactInfo {
    email: String
    phoneNumber: String
    mailingAddress: String
  }

  type EmergencyPOC {
    name: String
    phoneNumber: String
    relationship: String
  }

  type ImportantDate {
    importantDate: String # This is a string so that we can encrypt it
    description: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Message {
    message: String!
  }

  type Query {
    me: User!
    users: [User]!
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    deleteUser(userId: String!): Message
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
