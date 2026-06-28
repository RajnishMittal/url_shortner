const express = require("express")
const { createConnection } = require("./connection")
const urlRoute = require("./routes/url")
const staticRoute = require("./routes/staticUrl")
const path = require("path")
const urlModel = require("./model/url")
const app = express()

createConnection().then(() => console.log("connection established")).catch(err => console.log(err))

app.set('view engine', 'ejs');
app.set("views", path.resolve("views"))

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(express.static("public"))

app.use("/home", staticRoute)
app.use("/url", urlRoute)

app.listen(8001, () => {
    console.log("server started")
})