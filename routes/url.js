const express = require("express")
const { generateUrl , getAnalytics , shortenedUrl } = require("../controllers/urls")
const urlModel = require("../model/url")
const router = express.Router()

router.post("/", generateUrl)
router.get("/:shortId", shortenedUrl)
router.get("/analytics/:shortId", getAnalytics)


module.exports = router