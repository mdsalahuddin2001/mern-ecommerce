const slugify = require("slugify");
const Product = require("../models/Product");

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
  const product = await Product.findById(req.params.id);
  res.status(200).json(product);
};
// @desc      Add Product
// @route     POST /api/v1/products
// @access    Private
exports.addProduct = async (req, res, next) => {
  console.log(req.body);
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
// @route     POST /api/v1/products/:id
// @access    Private
exports.updateProduct = async (req, res, next) => {
  const productBody = {
    name: req.body.name,
    slug: slugify(req.body.name),
    image: req.body.image,
    price: req.body.price,
    category: req.body.category,
    countInStock: req.body.countInStock,
    description: req.body.description,
    updatedBy: req?.user?._id || "63db31595059dd9f22535a8b",
  };
  //   Add product
  const product = await Product.create(productBody);
  res.status(200).json(product);
};
