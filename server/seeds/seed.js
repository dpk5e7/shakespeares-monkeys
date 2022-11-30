const db = require("../config/connection");
const { User } = require("../models");
const userSeeds = require("./userSeeds.json");
const teamMemberSeeds = require("./teamSeeds.json");

db.once("open", async () => {
  try {
    await User.deleteMany({});

    await User.create(userSeeds);

    const users = await User.find({});

    for (let u = 0; u < users.length; u++) {
      for (let i = 0; i < 4; i++) {
        users[u].team.push(teamMemberSeeds[i]);
        await users[u].save();
      }
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("All done!");
  process.exit(0);
});
