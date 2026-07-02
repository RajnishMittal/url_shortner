const { getUser } = require("../services/auth")

async function restrictToLoggedIn(req, res, next) {
    const sessionId = req.cookies.uid
    console.log("sessionId from cookie:", sessionId)  // add this
    console.log("user from map:", getUser(sessionId))  // add this
    if (!sessionId) return res.redirect("/login")

    const user = getUser(sessionId)
    if (!user) return res.redirect("/login")

    req.user = user
    next()
}

module.exports = {
    restrictToLoggedIn
}