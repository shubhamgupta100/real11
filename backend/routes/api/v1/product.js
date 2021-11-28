const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  createProduct,
  getProductDetail,
} = require("../../../controller/productController");

router.get("/", getAllProducts);
router.post("/new", createProduct);
router.get("/:id", getProductDetail);

module.exports = router;
