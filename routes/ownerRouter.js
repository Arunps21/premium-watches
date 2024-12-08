const express = require("express");
const router = express.Router();
const { ownerCreate, productPanel } = require("../controllers/ownerController");

router.route("/create").post(ownerCreate);
router.route("/admin").get(productPanel)

module.exports = router;
