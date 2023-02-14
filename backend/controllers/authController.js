const crypto = require("crypto");
const ErrorResponse = require("../utils/errorResponse");
const sendEmail = require("../utils/sendEmail");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const welcome = require("../utils/emails/welcome");

// @desc      Register user
// @route     POST /api/v1/auth/register
// @access    Public
exports.register = async (req, res, next) => {
  const { name, email, password, role } = req.body;
  //   Create user
  const user = await User.create({
    name,
    email,
    password,
    role,
  });
  //   grab token and send to email
  const verifyEmailToken = user.generateEmailVerificationToken();

  //   Create reset url
  const verifyEmailURL = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/auth/confirmemail?token=${verifyEmailToken}`;

  const message = welcome("mahfuzvai@gmail.com");

  user.save({ validateBeforeSave: false });

  const sendResult = await sendEmail({
    email: user.email,
    subject: "Email Verification token",
    message,
  });
  sendTokenResponse(user, 200, res);
};

// @desc      Admin Login
// @route     POST /api/v1/auth/admin-login
// @access    Public
exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  // Validate email & password
  if (!email || !password) {
    return next(new ErrorResponse("Please provide an email and password", 400));
  }
  // check for user
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorResponse("Invalid credentials", 401));
  }
  // check password
  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    return next(new ErrorResponse("Invalid credentials", 401));
  }
  sendTokenResponse(user, 200, res);
};
// @desc Logout
// @route POST /auth/logout
// @access Public - just to clear cookie if exists
exports.logout = (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204); //No content
  res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });
  res.json({ message: "Cookie cleared" });
};

// Get token from mode, create cookie and send response
const sendTokenResponse = (user, statusCode, res) => {
  // Create access token
  const accessToken = user.generateAccessToken();
  const refreshToken = user.generateRefreshToken();

  const cookieOptions = {
    expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    secure: true, // https
    sameSite: "none", // cross-site cookie
  };

  if (process.env.NODE_ENV === "production") {
    cookieOptions.secure = true;
  }
  res
    .status(statusCode)
    .cookie("refresh", refreshToken, cookieOptions)
    .json({
      accessToken,
      user: {
        name: user?.name,
        email: user?.email,
        role: user?.role,
      },
    });
};
