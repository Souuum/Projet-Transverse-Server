const Sequelize = require("sequelize");
const db = require("../config/database");

const Users_Questions_History = db.define("users", {
    id_user: {
        type: Sequelize.INTEGER,
    },
    id_question: {
        type: Sequelize.INTEGER,
    },
    score: {
        type: Sequelize.INTEGER,
    }
});

module.exports = Users_Questions_History;