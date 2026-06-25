const express = require("express")
const { createConnection } = require("./connection")
const urlRoute = require("./routes/url")
const app = express()

createConnection().then(() => console.log("connection established")).catch(err => console.log(err))

app.use(express.urlencoded())
app.use(express.json())
app.use("/url", urlRoute)

app.listen(8001, () => {
    console.log("server started")
})