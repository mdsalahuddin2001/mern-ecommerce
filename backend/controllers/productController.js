const slugify = require("slugify");
const Product = require("../models/Product");
const ErrorResponse = require("../utils/errorResponse");

// @desc      Get Products
// @route     POST /api/v1/products
// @access    Public
exports.getProducts = async (req, res, next) => {
  const products = await Product.find({});
  res.status(200).json({ products });
};
// @desc      Get Product By Id
// @route     POST /api/v1/products/:id
// @access    Public
exports.getSingleProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id).populate(["category"]);
  res.status(200).json(product);
};
// @desc      Delete Product By Id
// @route     DELETE /api/v1/products/:id
// @access    Private
exports.deleteProduct = async (req, res, next) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) {
    return next(new ErrorResponse("Product not found!"));
  }
  res.status(200).json(product);
};
// @desc      Add Product
// @route     POST /api/v1/products
// @access    Private
exports.addProduct = async (req, res, next) => {
  const productBody = {
    name: req.body.name,
    slug: slugify(req.body.name),
    image: req.body.image,
    price: req.body.price,
    category: req.body.category,
    countInStock: req.body.countInStock,
    rating: 0,
    numReviews: 0,
    description: req.body.description,
    createdBy: req?.user?._id || "63db31595059dd9f22535a8b",
  };
  //   Add product
  const product = await Product.create(productBody);
  res.status(200).json(product);
};
// @desc      Update Product
// @route     PATCH /api/v1/products/:id
// @access    Private
exports.updateProduct = async (req, res, next) => {
  const productBody = {
    ...req.body,
    updatedBy: req?.user?._id || "63db31595059dd9f22535a8b",
  };
  console.log(req.body);
  if (req.body.name) {
    productBody.slug = slugify(req.body.name);
  }
  //   Add product
  const product = await Product.findByIdAndUpdate(req.params.id, productBody, {
    new: true,
  });
  res.status(200).json(product);
};
