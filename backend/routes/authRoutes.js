const express = require("express");
const { register, login, logout } = require("../controllers/authController");
const router = express.Router();

router.post("/register", register);

// admin & super admin
router.post("/login", login);
router.post("/logout", logout);
router.get("/demo", (req, res, next) => {
  console.log(req.cookies);
  res.json({
    demo: {
      1: 1,
    },
  });
});
module.exports = router;
