const Order = require("../models/Order");

// @desc      Get Orders
// @route     POST /api/v1/orders
// @access    Private
exports.getOrders = async (req, res, next) => {
  //   get order
  const orders = await Order.find();
  res.status(200).json({ orders });
};
// @desc      Get Orders
// @route     POST /api/v1/orders
// @access    Private
exports.getMyOrders = async (req, res, next) => {
  const userId = req.user;
  //   get order
  const orders = await Order.find({ user: userId });
  res.status(200).json({ orders });
};
// @desc      Get Order
// @route     POST /api/v1/orders/:id
// @access    Private
exports.getOrder = async (req, res, next) => {
  //   get order
  const order = await Order.findById(req.params.id);
  res.status(200).json(order);
};
// @desc      Get Products
// @route     POST /api/v1/products
// @access    Public
exports.placeOrder = async (req, res, next) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    paymentResult,
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
    isPaid,
    paidAt,
    isDelivered,
    deliveredAt,
  } = req.body;

  //   Create user
  const order = await Order.create({
    ...req.body,
    user: "63db31595059dd9f22535a8b",
  });
  res.status(200).json(order);
};
