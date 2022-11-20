const { Schema, model } = require("mongoose");
const SHA256 = require("crypto-js/sha256");
const Base64 = require("crypto-js/enc-base64");

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
    this.password = Base64.stringify(SHA256(this.password));
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  const hash = Base64.stringify(SHA256(password));
  return hash === this.password;
};

const User = model("User", userSchema);

module.exports = User;
