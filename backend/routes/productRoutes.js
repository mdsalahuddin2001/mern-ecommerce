const express = require("express");
const {
  getProducts,
  getSingleProduct,
  addProduct,
} = require("../controllers/productController");
const { protect, authorize } = require("../middlewares/auth");
const router = express.Router();

// router.post("/", createProduct);

// admin & super admin
router.route("/").get(getProducts).post(addProduct);
// .post(protect, authorize("admin"), addProduct);
router.route("/:id").get(getSingleProduct);
module.exports = router;
