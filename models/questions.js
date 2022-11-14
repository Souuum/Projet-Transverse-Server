const Sequelize = require("sequelize");
const db = require("../config/database");

const Questions = db.define("users", {
    category: {
        type: Sequelize.STRING,
    },
    description: {
        type: Sequelize.STRING,
    },
    poids: {
        type: Sequelize.INTEGER,
    }
});

module.exports = Questions;