const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetail,
} = require("../controllers/productController");
const { isUserAuthenticated, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/products").get(getAllProducts);
router
  .route("/admin/product/new")
  .post(isUserAuthenticated, authorizeRoles("admin"), createProduct);
router
  .route("/admin/product/:id")
  .put(isUserAuthenticated, authorizeRoles("admin"), updateProduct)
  .delete(isUserAuthenticated, authorizeRoles("admin"), deleteProduct);

router.route("/product/:id").get(getProductDetail);

module.exports = router;
