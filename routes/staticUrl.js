const express = require("express")
const urlModel = require("../model/url")
const router = express.Router()

router.get("/", async (req, res) => {
    const allUrl = await urlModel.find({})
    res.render("home", {
        urls: allUrl
    })
})


module.exports = router