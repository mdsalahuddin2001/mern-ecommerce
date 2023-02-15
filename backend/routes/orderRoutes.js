const express = require("express");
const { protect, authorize } = require("../middlewares/auth");
const {
  placeOrder,
  getOrder,
  getOrders,
  getMyOrders,
} = require("../controllers/orderController");

const router = express.Router();

router.route("/").post(placeOrder).get(protect, authorize("admin"), getOrders);
router.route("/mine").get(protect, getMyOrders);
router.route("/:id").get(getOrder);
module.exports = router;
