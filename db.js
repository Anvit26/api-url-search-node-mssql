const Sequelize = require("sequelize");

const db = new Sequelize('DemoDB', 'Test', 'test', {           //config DB
    host: 'localhost',
    dialect: 'mssql',
    pool: {
        min: 0,
        max: 5,
    }
})
const User = db.define('userinfo', {                              //user tabel name
    UserId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Name: {
        type: Sequelize.STRING,
        allowNull: true
    },
    Mobile: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    Age: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
});
db.sync()
    .then(() => console.log("database is synced"))
    .catch((err) => console.error("error creating database"))

exports = module.exports = {
    User
}