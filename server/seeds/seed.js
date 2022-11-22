const db = require("../config/connection");
const { User } = require("../models");
const userSeeds = require("./userSeeds.json");
const teamMemberSeeds = require("./teamSeeds.json");
const crypto = require("../utils/crypto");

const cipherText = crypto.encrypt("Dan Kelly");

console.log({
  cipherText: cipherText,
});

const plainText = crypto.decrypt(cipherText);

console.log({
  plainText: plainText,
});

db.once("open", async () => {
  try {
    await User.deleteMany({});

    await User.create(userSeeds);

    const users = await User.find({});

    let start = 0;
    for (let u = 0; u < users.length; u++) {
      for (let i = start; i < start + 4; i++) {
        users[u].team.push(teamMemberSeeds[i]);
        await users[u].save();
      }
      start += 4;
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("All done!");
  process.exit(0);
});
