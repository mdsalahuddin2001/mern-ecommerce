const express = require("express");
const { register, loginAdmin } = require("../controllers/authController");
const router = express.Router();

router.post("/register", register);

// admin & super admin
router.post("/admin-login", loginAdmin);
router.get("/demo", (req, res, next) => {
  console.log(req.cookies);
  res.json({
    demo: {
      1: 1,
    },
  });
});
module.exports = router;
