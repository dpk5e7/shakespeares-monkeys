const { User } = require("../models");
const { signToken } = require("../utils/auth");
const { GraphQLScalarType } = require("graphql");
const { Kind } = require("graphql/language");

const resolvers = {
  Query: {
    // query that returns the current user, pulls the user's id from context
    user: async (parent, args, context) => {
      return await User.findOne({ _id: context.user._id });
    },

    // query that returns all users
    users: async () => {
      return await User.find({});
    },

    // query that returns all team members
    team: async (parent, args, context) => {
      const user = await User.findOne({ _id: context.user._id });
      return user.team;
    },

    // query that returns one team member
    oneTeamMember: async (parent, { oneTeamMemberId }, context) => {
      const user = await User.findOne({ _id: context.user._id });
      const oneTeamMember = user.team.find((otm) => otm._id == oneTeamMemberId);
      return oneTeamMember;
    },

    // query that returns team skills
    teamSkills: async (parent, args, context) => {
      const user = await User.findOne({ _id: context.user._id });
      let labels = [];
      let data = [];
      for (let teamMember of user.team) {
        labels = labels.concat(teamMember.skills);
      }
      labels = [...new Set(labels)];

      for (let i = 0; i < labels.length; i++) {
        let count = 0;
        for (let teamMember of user.team) {
          for (let skill of teamMember.skills) {
            if (skill === labels[i]) {
              count++;
            }
          }
        }
        data.push(count);
        count = 0;
      }

      return { labels, data };
    },

    // query that returns team responsibilities
    teamResponsibilities: async (parent, args, context) => {
      const user = await User.findOne({ _id: context.user._id });
      let labels = [];
      let data = [];
      for (let teamMember of user.team) {
        labels = labels.concat(teamMember.responsibilities);
      }
      labels = [...new Set(labels)];

      for (let i = 0; i < labels.length; i++) {
        let count = 0;
        for (let teamMember of user.team) {
          for (let skill of teamMember.responsibilities) {
            if (skill === labels[i]) {
              count++;
            }
          }
        }
        data.push(count);
        count = 0;
      }

      return { labels, data };
    },

    // query that returns team personal interests
    teamPersonalInterests: async (parent, args, context) => {
      const user = await User.findOne({ _id: context.user._id });
      let labels = [];
      let data = [];
      for (let teamMember of user.team) {
        labels = labels.concat(teamMember.personalInterests);
      }
      labels = [...new Set(labels)];

      for (let i = 0; i < labels.length; i++) {
        let count = 0;
        for (let teamMember of user.team) {
          for (let skill of teamMember.personalInterests) {
            if (skill === labels[i]) {
              count++;
            }
          }
        }
        data.push(count);
        count = 0;
      }

      return { labels, data };
    },

    // query that returns team personal interests
    teamTraining: async (parent, args, context) => {
      const user = await User.findOne({ _id: context.user._id });
      let labels = [];
      let data = [];
      for (let teamMember of user.team) {
        labels = labels.concat(teamMember.training);
      }
      labels = [...new Set(labels)];

      for (let i = 0; i < labels.length; i++) {
        let count = 0;
        for (let teamMember of user.team) {
          for (let skill of teamMember.training) {
            if (skill === labels[i]) {
              count++;
            }
          }
        }
        data.push(count);
        count = 0;
      }

      return { labels, data };
    },

    // query that returns upcoming team important dates
    teamUpcomingImportantDates: async (parent, args, context) => {
      const user = await User.findOne({ _id: context.user._id });
      let teamUpcomingImportantDates = [];
      for (let teamMember of user.team) {
        for (let impDate of teamMember.importantDates) {
          let currentYear = new Date().getFullYear();
          let dateThisYear = new Date(impDate.importantDate);
          dateThisYear.setFullYear(currentYear);
          if (dateThisYear < Date.now()) {
            dateThisYear.setFullYear(currentYear + 1);
          }

          let limitDate = new Date();
          limitDate.setMonth(limitDate.getMonth() + 3);

          // Only include dates less than 3 months away
          if (dateThisYear < limitDate) {
            // Concatenate the team member's name to the description
            let dtImportant = {
              description: `${teamMember.name}'s ${impDate.description}`,
              importantDate: dateThisYear.toLocaleDateString(),
            };
            teamUpcomingImportantDates.push(dtImportant);
          }
        }
      }

      // Sort so the nearest dates are first
      teamUpcomingImportantDates.sort((date1, date2) =>
        new Date(date1.importantDate) > new Date(date2.importantDate) ? 1 : -1
      );

      return teamUpcomingImportantDates;
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

    // addTeamMember mutation that returns a success/fail message
    addTeamMember: async (
      parent,
      {
        name,
        email,
        phoneNumber,
        mailingAddress,
        pocName,
        pocPhoneNumber,
        pocRelationship,
      },
      context
    ) => {
      let message = "No such user exists";

      const user = await User.findOne({ _id: context.user._id });

      if (user) {
        const newTeamMember = {
          name: name,
          contactInfo: {
            email: email,
            phoneNumber: phoneNumber,
            mailingAddress: mailingAddress,
          },
          emergencyPOC: {
            name: pocName,
            phoneNumber: pocPhoneNumber,
            relationship: pocRelationship,
          },
        };

        user.team.push(newTeamMember);
        await user.save();
        message = `${name} added successfully.`;
      }
      return { message, user };
    },

    // editTeamMember mutation that returns a success/fail message
    editTeamMember: async (
      parent,
      {
        id,
        name,
        email,
        phoneNumber,
        mailingAddress,
        pocName,
        pocPhoneNumber,
        pocRelationship,
        experience,
        familySituation,
        notes,
        skills,
        responsibilities,
        personalInterests,
        training,
        dates,
      },
      context
    ) => {
      let message = "No such user exists";

      const user = await User.findOne({ _id: context.user._id });

      if (user) {
        message = "No such team member exists";

        const oneTeamMember = user.team.find((otm) => otm._id == id);

        if (oneTeamMember) {
          oneTeamMember.name = name;
          oneTeamMember.contactInfo.email = email;
          oneTeamMember.contactInfo.phoneNumber = phoneNumber;
          oneTeamMember.contactInfo.mailingAddress = mailingAddress;
          oneTeamMember.emergencyPOC.name = pocName;
          oneTeamMember.emergencyPOC.phoneNumber = pocPhoneNumber;
          oneTeamMember.emergencyPOC.relationship = pocRelationship;
          oneTeamMember.experience = experience;
          oneTeamMember.familySituation = familySituation;
          oneTeamMember.notes = notes;
          oneTeamMember.skills = skills;
          oneTeamMember.responsibilities = responsibilities;
          oneTeamMember.personalInterests = personalInterests;
          oneTeamMember.training = training;

          // Rebuild important dates
          const importantDates = [];
          for (let i = 0; i < dates.length; i += 2) {
            let newDate = {
              importantDate: dates[i],
              description: dates[i + 1],
            };
            importantDates.push(newDate);
          }
          oneTeamMember.importantDates = importantDates;

          await user.save();
          message = `${name} updated successfully.`;
        }
      }
      return { message, user };
    },

    // deleteTeamMember mutation that returns a success/fail message
    deleteTeamMember: async (parent, { id }, context) => {
      let message = "No such user exists";

      const user = await User.findOne({ _id: context.user._id });

      if (user) {
        user.team = user.team.filter((teamMember) => teamMember._id != id);
        await user.save();
        message = `${id} deleted successfully.`;
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
