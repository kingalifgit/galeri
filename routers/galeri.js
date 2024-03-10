const express = require("express")
const router = express.Router()
const multer = require("multer")
const path = require("path")
const Galeri = require("../models/galeri")
const uploadPath = path.join("public", Galeri.basePath)
const mime = ['images/png', 'images/jpg', 'images/jpeg']
const upload = multer({
  dest: Galeri.basePath,
  fileFilter: (req, file, callback) => {
    callback(null, )
  }
})

router.get("/", (req, res) => {
  res.render("galeri", {title: "index"})
})

router.get("/add-foto", (req, res) =>{
  res.render("add-foto", {title: "Upload foto"})
})

router.post("/", upload.single("file"), async (req, res) => {
  const fileName = req.file != null ? req.file.filename : null
  const galeri = new Galeri({
    file: req.body.file,
    deskripsi: req.body.deskripsi
  })

  try {
    const newGaleri = await galeri.save()
    res.redirect("/galeri")
  } catch (error) {
    console.log(error)
  }
})

module.exports = router