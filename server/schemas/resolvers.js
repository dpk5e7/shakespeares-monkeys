const { User } = require("../models");
const { signToken } = require("../utils/auth");
const { GraphQLScalarType } = require("graphql");
const { Kind } = require("graphql/language");

const resolvers = {
  Query: {
    // query that returns the current user, pulls the user's id from context
    me: async (parent, args, context) => {
      return await User.findOne({ _id: context.user._id });
    },

    // query that returns all users
    users: async () => {
      return await User.find({});
    },
  },

  Mutation: {
    // addUser mutation that returns an Auth object
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },

    // deleteUser mutation that returns a success/fail message
    deleteUser: async (parent, { userId }) => {
      let message = { message: "No such user exists" };
      const user = await User.findByIdAndRemove(userId);
      if (user) {
        message = {
          message: `${user.username} deleted successfully.`,
        };
      }
      return message;
    },

    // login mutation that returns an Auth object
    login: async (parent, { email, password }) => {
      const user = await User.findOne({
        $or: [{ username: email }, { email: email }],
      });
      if (!user) {
        return { message: "This email & password combination is incorrect." };
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        return { message: "This email & password combination is incorrect." };
      }

      const token = signToken(user);

      // Update last_login
      user.last_login = Date.now();
      await user.save();

      return { token, user };
    },
  },

  // https://stackoverflow.com/questions/49693928/date-and-json-in-type-definition-for-graphql
  Date: new GraphQLScalarType({
    name: "Date",
    description: "Date custom scalar type",
    parseValue(value) {
      return new Date(value); // value from the client
    },
    serialize(value) {
      return value.getTime(); // value sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10); // ast value is always in string format
      }
      return null;
    },
  }),
};

module.exports = resolvers;
