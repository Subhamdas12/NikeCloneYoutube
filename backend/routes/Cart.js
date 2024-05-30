const express = require("express");
const {
  addToCart,
  fetchCart,
  deletFromCart,
  updateCart,
} = require("../controllers/Cart");
const router = express.Router();
router
  .get("/fetchCart", fetchCart)
  .post("/addToCart", addToCart)
  .delete("/deleteFromCart/:id", deletFromCart)
  .patch("/updateCart/:id", updateCart);
exports.router = router;
