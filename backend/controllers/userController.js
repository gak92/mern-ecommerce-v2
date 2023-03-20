const User = require('../models/userModel');
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const sendToken = require('../utils/jwtToken');

// Register a user
exports.registerUser = catchAsyncErrors( async(req, res, next) => {
  const {name, email, password} = req.body;

  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "this is user public id",
      url: "avatar profile url"
    }
  });

  // const token = user.getJWTToken();

  // res.status(201).json({
  //   success: true,
  //   token,
  // });

  sendToken(user, 201, res);
});

// Login User
exports.loginUser = catchAsyncErrors( async(req,res,next) => {
  const { email, password } = req.body;

  // If email or password does not entered
  if(!email || !password) {
    return next(new ErrorHandler("Please enter email and password", 400));
  }

  const user = await User.findOne({email}).select("+password");
  if(!user) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }

  const isPasswordMatched = user.comparePassword(password);
  if(!isPasswordMatched) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }

  // const token = user.getJWTToken();

  // res.status(200).json({
  //   success: true,
  //   token,
  // });

  sendToken(user, 200, res);
});

// Logout User
exports.logoutUser = catchAsyncErrors( async(req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged Out Successfully"
  });
});
