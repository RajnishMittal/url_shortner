const { nanoid } = require("nanoid")
const urlModel = require("../model/url")

async function generateUrl(req, res) {
    const body = req.body
    if (!body.url) return res.status(404).json({ "status": "pending" })
    const shortID = nanoid(8)
    const result = await urlModel.create({
        shortId: shortID,
        redirectURL: body.url,
        visitHistory: [],
    })
    return res.json({ id: shortID })
}

async function shortenedUrl(req, res){
    const shortId = req.params.shortId
    const entry = await urlModel.findOneAndUpdate({
        shortId
    }, {$push: {
        visitHistory: {
            timestamp: Date.now()
        }
    }})

    res.redirect(entry.redirectURL)
}

async function getAnalytics(req, res) {
    const shortId = req.params.shortId
    const entry = await urlModel.findOne({shortId})
    const total_clicks = entry.visitHistory.length
    const full_analytics = entry.visitHistory

    return res.json({ Total_Clicks: total_clicks, Analytics: full_analytics})
}

module.exports = {
    generateUrl,
    getAnalytics,
    shortenedUrl
}