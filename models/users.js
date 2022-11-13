const Sequelize = require("sequelize");
const db = require("../config/database");

const Users = db.define("users", {
  name: {
    type: Sequelize.STRING,
  },
  firstname: {
    type: Sequelize.STRING,
  },
    email: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
    validate: {
      is: /^[0-9a-f]{64}$/i,
    },
  },
  schoolyear: {
    type: Sequelize.STRING,
  }
});

module.exports = Users;
