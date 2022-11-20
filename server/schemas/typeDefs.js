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
    team: [TeamMember]
  }

  type TeamMember {
    _id: ID
    name: String!
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
