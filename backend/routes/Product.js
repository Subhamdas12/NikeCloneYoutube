const express = require("express");
const {
  createProduct,
  fetchProducts,
  updateProductById,
  deleteProductById,
  fetchProductById,
} = require("../controllers/Product");

const router = express.Router();
router
  .get("/fetchProducts", fetchProducts)
  .get("/fetchProductById/:id", fetchProductById)
  .post("/createProduct", createProduct)
  .patch("/updateProductById/:id", updateProductById)
  .delete("/deleteProductById/:id", deleteProductById);

exports.router = router;
