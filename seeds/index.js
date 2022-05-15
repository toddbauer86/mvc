const seedPosts = require("./post-seeds");
const seedUsers = require("./user-seeds");
const seedComments = require("./comment-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- database sync -----\n");

  await seedUsers();
  console.log("\n----- users added -----\n");

  await seedPosts();
  console.log("\n----- posts added -----\n");

  await seedComments();
  console.log("\n----- comments added -----\n");

  process.exit(0);
};

seedAll();
