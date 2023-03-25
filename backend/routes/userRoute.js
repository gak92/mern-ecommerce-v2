const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  forgotPassword,
  resetPassword,
  getUserDetail,
  updatePassword,
  updateProfile,
} = require("../controllers/userController");
const { isUserAuthenticated, authorizeRoles} = require("../middleware/auth");

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logoutUser);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);
router.route("/me").get(isUserAuthenticated, getUserDetail);
router.route("/password/update").put(isUserAuthenticated, updatePassword);
router.route("/me/update").put(isUserAuthenticated, updateProfile);


module.exports = router;
