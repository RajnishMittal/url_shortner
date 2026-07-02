const { v4: uuidv4 } = require("uuid")
const userModel = require("../model/user")
const { setUser } = require('../services/auth')

async function userSignup(req, res){
    const {name, email, password} = req.body

    if(!email || !password || !name){
        return res.render("signup", {
            error: "Empty input box"
        })
    }

    await userModel.create({ name, email, password })
    return res.redirect("/login")
}

async function userLogin(req, res) {
    const { email, password } = req.body
    if(!email || !password){
        return res.render("login", { error: "Empty input box" })
    }

    const user = await userModel.findOne({ email, password })
    
    if (user) {
        const sessionId = uuidv4();
        setUser(sessionId, user)
        res.cookie("uid", sessionId)
        return res.redirect("/")
    } else {
        return res.render("login", { error: "Invalid Username or Password" })
    }
}

module.exports = {
    userSignup,
    userLogin
}