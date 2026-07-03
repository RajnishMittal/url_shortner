const { getUser } = require("../services/auth")

function restrictToLoggedIn(req, res, next) {
    const token = req.cookies.uid
    if (!token) {
        res.setHeader("Cache-Control", "no-store")
        return res.redirect("/login")
    }
    try {
        const user = getUser(token)
        req.user = user
        res.setHeader("Cache-Control", "no-store")
        next()
    } catch (err) {
        return res.redirect("/login")
    }
}

function restrictToUser(roles = []) {
    return function(req, res, next) {
        try {
            if(!req.user) return res.redirect("/login")
            if (!roles.includes(req.user.role)) return res.end("Unauthorized" )
            return next()
        }
        catch (err) {
            return res.redirect("/login")
        }
    }
}

module.exports = {
    restrictToLoggedIn,
    restrictToUser
}