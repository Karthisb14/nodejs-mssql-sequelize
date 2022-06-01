const {Sequelize}= require('sequelize')
const sequelizeInstance = require('../db/database')

const User = sequelizeInstance.define('employee', {
    title:{
        type: Sequelize.STRING,
    },
    firstName:{
        type: Sequelize.STRING
    },
    lastName:{
        type: Sequelize.STRING
    },
    address:{
        type: Sequelize.STRING
    }
 
})

module.exports = User