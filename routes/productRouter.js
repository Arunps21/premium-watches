const express = require("express")
const router = express.Router()
const upload = require("../config/multerConfiguration")
const { createProduct } = require("../controllers/productController")


router.route("/create").post(upload.single("image"),createProduct)

module.exports = router