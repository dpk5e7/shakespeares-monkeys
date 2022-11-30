const { User } = require("../models");
const { signToken } = require("../utils/auth");
const { GraphQLScalarType } = require("graphql");
const { Kind } = require("graphql/language");

const resolvers = {
  Query: {
    // query that returns the current user, pulls the user's id from context
    user: async (parent, { userId }, context) => {
      return await User.findOne({ _id: userId });
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
      let message = "No such user exists";
      const user = await User.findByIdAndRemove(userId);
      if (user) {
        message = `${user.username} deleted successfully.`;
      }
      return { message, user };
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

    // toggleAdmin mutation that returns a success/fail message
    toggleAdmin: async (parent, { userId }) => {
      let message = "No such user exists";
      const user = await User.findById(userId);
      if (user) {
        try {
          user.is_admin = !user.is_admin;
          user.save();
          message = user.is_admin
            ? `${user.username} is now an administrator.`
            : `${user.username} is no longer an administrator.`;
        } catch {
          message = `${user.username} update failed.`;
        }
      }
      return { message, user };
    },

    // toggleLocked mutation that returns a success/fail message
    toggleLocked: async (parent, { userId }) => {
      let message = "No such user exists";
      const user = await User.findById(userId);
      if (user) {
        try {
          user.is_locked = !user.is_locked;
          user.save();
          message = user.is_locked
            ? `${user.username} is now locked.`
            : `${user.username} is no longer locked.`;
        } catch {
          message = `${user.username} update failed.`;
        }
      }
      return { message, user };
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
