const { Schema, model } = require("mongoose");
//const bcrypt = require("bcrypt");
var SHA256 = require("crypto-js/sha256");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
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
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    // const saltRounds = 10;
    // this.password = await bcrypt.hash(this.password, saltRounds);
    this.password = SHA256(this.password);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  //return bcrypt.compare(password, this.password);
  return SHA256(password) === this.password;
};

const User = model("User", userSchema);

module.exports = User;
