const { Schema, model } = require("mongoose");
const teamMemberSchema = require("./TeamMember")
const crypto = require("../utils/crypto");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
        "Must use a valid email address",
      ],
      set: (v) => v.toLowerCase(),
    },

    password: {
      type: String,
      required: true,
    },

    last_login: {
      type: Date,
      required: true,
      default: Date.now,
    },

    is_admin: {
      type: Boolean,
      required: true,
      default: false,
    },

    is_locked: {
      type: Boolean,
      required: true,
      default: false,
    },

    team: [teamMemberSchema],
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);

// hash user password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    this.password = crypto.hash(this.password);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  const hash = crypto.hash(password);
  return hash === this.password;
};

// Virtual to return the user's number of friends
userSchema.virtual("teamMemberCount").get(function () {
  return this.team.length;
});

const User = model("User", userSchema);

module.exports = User;
