const express = require("express")
const { createConnection } = require("./connection")

const path = require("path")
const cookieParser = require("cookie-parser")

const urlModel = require("./model/url")
const urlRoute = require("./routes/url")
const staticRoute = require("./routes/staticUrl")
const userRoute = require("./routes/user")

const { restrictToLoggedIn, restrictToUser } = require("./middleware/auth")

const app = express()

createConnection().then(() => console.log("connection established")).catch(err => console.log(err))

app.set('view engine', 'ejs');
app.set("views", path.resolve("views"))

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cookieParser())

app.use(express.static("public"))

app.use("/url", restrictToLoggedIn, urlRoute)
app.use("/user", userRoute)
app.get("/signup", (req, res) => res.render("signup"))
app.get("/login", (req, res) => res.render("login"))
app.use("/", restrictToLoggedIn, staticRoute)

app.listen(8001, () => {
    console.log("server started")
})