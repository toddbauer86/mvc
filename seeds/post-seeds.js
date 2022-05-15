const { Post } = require("../models");

const postData = [
  {
    title: "Does anyone know how to use github?",
    post_content: "I have no idea what I am doing",
    user_id: 3,
  },
  {
    title: "I am selling bitcoin",
    post_content: "Send me your wallet ID if you want to buy some!!",
    user_id: 1,
  },
  {
    title: "Does anyone know where to buy an affordable video card?",
    post_content: "Everywhere I look online is sold out :( ",
    user_id: 2,
  },
  {
    title: "What's your favorite website about coding?",
    post_content: "Mine is stack overflow",
    user_id: 5,
  },
  {
    title: "Does anyone know where I can get a coding job?",
    post_content: "Someone hire me plz",
    user_id: 4,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
