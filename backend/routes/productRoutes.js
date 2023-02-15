const express = require("express");
const {
  getProducts,
  getSingleProduct,
  addProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/productController");
const { protect, authorize } = require("../middlewares/auth");
const router = express.Router();

// router.post("/", createProduct);

// admin & super admin
router.route("/").get(getProducts).post(addProduct);
// .post(protect, authorize("admin"), addProduct);
router
  .route("/:id")
  .get(getSingleProduct)
  .delete(protect, authorize("admin"), deleteProduct)
  .patch(protect, authorize("admin"), updateProduct);
module.exports = router;
