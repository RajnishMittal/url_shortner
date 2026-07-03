const { nanoid } = require("nanoid")
const urlModel = require("../model/url")

async function generateUrl(req, res) {
    const body = req.body
    const urlz = body.url
    if (!urlz) return res.status(400).json({ error: "pending" })
    if(await urlModel.findOne({
        createdBy: req.user._id,
        redirectURL: urlz
    })) return res.status(400).json({ error: "Same URL already exists" }) 
    if (!urlz.startsWith("https://")) return res.status(400).json({ error: "URL must start with https://" })
    
    const shortID = nanoid(5)
    const result = await urlModel.create({
        shortId: shortID,
        redirectURL: body.url,
        visitHistory: [],
        createdBy: req.user._id
    })
    const allUrl = await urlModel.find({ createdBy: req.user._id })
    return res.redirect(`/?id=${shortID}`)
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