const Sequelize = require('sequelize')

const sequelizeInstance = new Sequelize('student', 'sa', 'karthi', {
    host: 'localhost',
    dialect:'mssql',
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});



module.exports = sequelizeInstance