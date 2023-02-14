const express = require("express");
const { placeOrder, getOrder } = require("../controllers/orderController");

const router = express.Router();

router.route("/").post(placeOrder);
router.route("/:id").get(getOrder);
module.exports = router;
