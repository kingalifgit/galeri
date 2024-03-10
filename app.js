if( process.env.NODE_ENV !== "production"){
  require("dotenv").config()
}

const port = 3400
const express = require("express")
const app = express()
const layouts = require("express-ejs-layouts")
const parser = require("body-parser")

const mongoose = require("mongoose")
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on("error", error => console.log(error))
db.once("open", () => console.log("Connect database berhasil"))

const indexRouter = require("./routers/index")
const galeriRouter = require("./routers/galeri")

app.set("view engine", "ejs")
app.set('views', __dirname + "/views")
app.set("layout", "layout/main")
app.use(layouts)
app.use(express.static("public"))
app.use(parser.urlencoded({limit: "10mb", extended: false}))

app.use("/", indexRouter)
app.use("/galeri", galeriRouter)


app.listen(port, (req, res) => {
  console.log(`Berjalan di http://localhost:${port}`)
})