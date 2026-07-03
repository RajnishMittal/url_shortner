const express = require("express")
const urlModel = require("../model/url")
const { restrictToUser } = require("../middleware/auth")
const router = express.Router()

router.get("/", restrictToUser(["normal", "admin"]) ,async (req, res) => {
    if(!req.user) return res.redirect("/login")

    const allUrl = await urlModel.find({createdBy: req.user._id})
    res.render("home", {
        urls: allUrl,
        user: req.user,
        id: req.query.id || null
    })
})

router.get("/allUrls", restrictToUser(["admin"]) ,async (req, res) => {
    const allUrls = await urlModel.find({})
    res.render("home", {
        urls: allUrls,
        user: req.user,
        id: req.query.id || null
    })
})


module.exports = router