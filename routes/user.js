const express = require("express")
const {
    userSignup,
    userLogin
} = require('../controllers/user')

const router = express.Router()

router.post('/', userSignup)
router.post('/login', userLogin)

router.get("/logout", (req, res) => {
    res.clearCookie("uid")
    res.setHeader("Cache-Control", "no-store")
    return res.redirect("/login")
})

module.exports = router