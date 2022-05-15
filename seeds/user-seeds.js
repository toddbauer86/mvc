const { User } = require("../models");

const userData = [
  {
    username: "tommy_edman",
    email: "tommy@cardinals.com",
    password: "password1234",
  },
  {
    username: "nolan_arenado",
    email: "nolan@cardinals.com",
    password: "password1234",
  },
  {
    username: "yadi_molina",
    email: "yadi@cardinals.com.com",
    password: "password1234",
  },
  {
    username: "paul_goldschmidt",
    email: "paul@cardinals.com",
    password: "password1234",
  },
  {
    username: "harrison_bader",
    email: "harrison@cardinals.com",
    password: "password1234",
  },
  {
    username: "dylan_carlson",
    email: "dylan@cardinals.com",
    password: "password1234",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
