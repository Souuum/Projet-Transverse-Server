const connection = require("./connection")

const Sequelize = require("sequelize");
module.exports = new Sequelize(connection.db,connection.user,connection.pw,{
    host:connection.host,
    dialect:'mysql',
    define:{
        timestamps: false,
        freezeTableName: true,
    },
});
