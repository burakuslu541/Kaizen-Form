const router = require('express').Router()
const User = require('../models/Users')
const jwt = require('jsonwebtoken')

const maxAge = 60 * 60 * 24

const createToken = (id, role) => {
    return jwt.sign({
        id,
        role
    }, 'gizli kelime', {
        expiresIn: maxAge
    })
}

router.post('/login', async (req, res) => {
    const {
        username,
        password
    } = req.body
    try {
        const user = await User.login(username, password);
        const token = createToken(user._id, user.role)
        res.json({
            jwt: token,
            role: user.role
        })
    } catch (error) {
        console.log(error);
    }
})

router.get('/getUsers', async(req, res) => {
    const users = await User.find({
        role: "Default"
    })
    res.json(users);
})

router.post('/register', async (req, res) => {
    const {
        username,
        password
    } = req.body
    try {
        await User.register(username, password);
        res.json({
            status: true
        })
    } catch (error) {
        console.log(error);
    }
})

module.exports = router