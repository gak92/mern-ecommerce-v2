const express = require("express");
const { newOrder } = require("../controllers/orderController");
const router = express.Router();
const { isUserAuthenticated, authorizeRoles } = require("../middleware/auth");

router.route("/order/new").post(isUserAuthenticated, newOrder);

module.exports = router;
