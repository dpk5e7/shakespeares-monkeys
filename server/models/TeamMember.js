const { Schema, Types, model } = require("mongoose");
const crypto = require("../utils/crypto");

// Schema to create a team member /////////////////////////////
const teamMemberSchema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },

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
        set: (v) => v.toLowerCase(),
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
      set: (text) => crypto.encrypt(text),
      get: (text) => crypto.decrypt(text),
    },

    importantDates: [
      {
        importantDate: {
          type: String, // This is a string so that we can encrypt it
          required: false,
          set: (text) => crypto.encrypt(text),
          get: (text) => crypto.decrypt(text),
        },
        description: {
          type: String,
          required: false,
          set: (text) => crypto.encrypt(text),
          get: (text) => crypto.decrypt(text),
        },
      },
    ],

    experience: {
      type: String,
      required: false,
    },

    skills: [
      {
        type: String,
        required: false,
      },
    ],

    responsibilities: [
      {
        type: String,
        required: false,
      },
    ],

    training: [
      {
        type: String,
        required: false,
      },
    ],

    personalInterests: [
      {
        type: String,
        required: false,
      },
    ],

    notes: {
      type: String,
      required: false,
      set: (text) => crypto.encrypt(text),
      get: (text) => crypto.decrypt(text),
    },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

module.exports = teamMemberSchema;
