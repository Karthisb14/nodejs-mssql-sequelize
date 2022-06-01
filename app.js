// const sql = require('mssql')
const express = require('express');
const userrouter = require('./Router/user')
const sequelizeInstance = require('./db/database')

const app = express()
app.use(express.json())
app.use(userrouter)

const port = process.env.PORT || 3000

sequelizeInstance.sync().then(() => {
    console.log("resynced successfully!")
})

app.listen(port, () => {
    console.log('Server started on port 3000')
})