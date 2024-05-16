const express = require("express");
const { fetchSizes } = require("../controllers/Size");

const router = express.Router();
router.get("/", fetchSizes);
exports.router = router;
