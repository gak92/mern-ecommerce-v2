const express = require("express");
const { newOrder, getSingleOrder, myOrders } = require("../controllers/orderController");
const router = express.Router();
const { isUserAuthenticated, authorizeRoles } = require("../middleware/auth");

router.route("/order/new").post(isUserAuthenticated, newOrder);

router.route("/order/:id").get(isUserAuthenticated, getSingleOrder);

router.route("/orders/me").get(isUserAuthenticated, myOrders);

module.exports = router;
