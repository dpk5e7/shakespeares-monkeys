const { Schema, model } = require("mongoose");
const AES = require("crypto-js/AES");
const Base64 = require("crypto-js/enc-base64");

// Schema to create a team member /////////////////////////////
const teamMemberSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    contactInfo: {
      email: {
        type: String,
        required: false,
        match: [
          /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
          "Must use a valid email address",
        ],
      },
      phoneNumber: {
        type: String,
        required: false,
      },
      mailingAddress: {
        type: String,
        required: false,
      },
    },

    emergencyPOC: {
      name: {
        type: String,
        required: false,
      },
      phoneNumber: {
        type: String,
        required: false,
      },
      relationship: {
        type: String,
        required: false,
      },
    },

    familySituation: {
      type: String,
      required: false,
    },

    importantDates: [
      {
        importantDate: {
          type: Date,
          required: false,
        },
        description: {
          type: String,
          required: false,
        },
      },
    ],

    experience: {
      type: String,
      required: false,
    },

    skills: {
      type: String,
      required: false,
    },

    responsibilities: {
      type: String,
      required: false,
    },

    training: {
      type: String,
      required: false,
    },

    personalInterests: {
      type: String,
      required: false,
    },

    notes: {
      type: String,
      required: false,
    },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);

const TeamMember = model("TeamMember", teamMemberSchema);

module.exports = TeamMember;
