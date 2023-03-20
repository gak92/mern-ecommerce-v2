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
router.route("/product/new").post(isUserAuthenticated, authorizeRoles("admin"), createProduct);
router
  .route("/product/:id")
  .put(isUserAuthenticated, authorizeRoles("admin"), updateProduct)
  .delete(isUserAuthenticated, authorizeRoles("admin"), deleteProduct)
  .get(getProductDetail);

module.exports = router;
