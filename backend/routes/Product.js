const express = require("express");
const {
  createProduct,
  fetchProducts,
  updateProductById,
  deleteProductById,
} = require("../controllers/Product");

const router = express.Router();
router
  .post("/createProduct", createProduct)
  .get("/fetchProducts", fetchProducts)
  .patch("/updateProductById/:id", updateProductById)
  .delete("/deleteProductById/:id", deleteProductById);

exports.router = router;
