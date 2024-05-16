const express = require("express");
const { fetchColors } = require("../controllers/Color");

const router = express.Router();
router.get("/", fetchColors);
exports.router = router;
