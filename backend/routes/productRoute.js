const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetail,
} = require("../controllers/productController");
const { isUserAuthenticated } = require("../middleware/auth");

const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/product/new").post(isUserAuthenticated, createProduct);
router
  .route("/product/:id")
  .put(isUserAuthenticated, updateProduct)
  .delete(isUserAuthenticated, deleteProduct)
  .get(getProductDetail);

module.exports = router;
