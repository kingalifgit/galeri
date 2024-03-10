const mongoose = require("mongoose")

const basePath = "public/images/"

const galeriSchema = new mongoose.Schema({
  deskripsi: {
    type: String,
    required: true
  },
  uploadAt: {
    type: Date,
    required: true,
    default: Date.now()
  }
})

module.exports = mongoose.model("Galeri", galeriSchema)
module.exports.basePath = basePath