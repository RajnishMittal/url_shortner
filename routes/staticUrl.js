const express = require("express")
const urlModel = require("../model/url")
const router = express.Router()

router.get("/", async (req, res) => {
    if(!req.user) return res.redirect("/login")

    const allUrl = await urlModel.find({createdBy: req.user._id})
    res.render("home", {
        urls: allUrl,
        user: req.user,
        id: req.query.id || null
    })
})


module.exports = router