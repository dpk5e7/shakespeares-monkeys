const { User } = require("../models");
const { signToken } = require("../utils/auth");

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
      return { token, user };
    },

  },
};

module.exports = resolvers;
