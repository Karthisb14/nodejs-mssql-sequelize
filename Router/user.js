const express = require('express')
const User = require('../Models/task')
const router = express.Router()

router.post('/products', async (req, res) => {
    // console.log(req.body)
    const data = {
        title: req.body.title,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address
    }

    const saveinfo = await User.create(data)
    // console.log(saveinfo)
    res.send(saveinfo)
})

router.get('/allusers', async(req, res) =>{
    const data = await User.findAll({
        where:{
            id: 2,
            address: 'london'
        }
    })
    res.send(data)
})
module.exports = router