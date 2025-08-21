const express = require("express");
const router = express.Router();
const {
  PostProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
} = require("../product Controller/product.controller.js");

router.post("/", PostProduct);

router.get("/", getAllProducts);

router.get("/:id", getProductById);

//update a product
router.put("/:id", updateProductById);

router.delete("/:id", deleteProductById);

module.exports = router;
