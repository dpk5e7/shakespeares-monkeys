const db = require("../config/connection");
const mongoose = require("mongoose");
const { User, TeamMember } = require("../models");
//const { User } = require("../models");
const userSeeds = require("./userSeeds.json");
const teamMemberSeeds = require("./teamSeeds.json");

db.once("open", async () => {
  try {
    await TeamMember.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    const users = await User.find({});

    for (let user of users) {
      for (let i = 0; i < 5; i++) {
        const teamMember = await TeamMember.create(
          teamMemberSeeds[Math.floor(Math.random() * teamMemberSeeds.length)]
        );
        
        await user.team.push(teamMember);
        await user.save();
      }
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("All done!");
  process.exit(0);
});
