const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Category = require("./models/Category");
const Product = require("./models/Product");
require("dotenv").config();
const data = {
  categories: [
    { name: "laptop", createdBy: "63db31595059dd9f22535a8b" },
    { name: "smartphone", createdBy: "63db31595059dd9f22535a8b" },
  ],
  users: [
    {
      name: "Basir",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "John",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: "Samsung Galaxy Note 9",
      slug: "samsung-galaxy-note-9",
      image: "/images/products/product-img-1.jpg",
      price: 400,
      countInStock: 10,
      rating: 0,
      numReviews: 0,
      description: "high quality shirt",
      category: "63db33a611e790a8d8578a7b",
      createdBy: "63db31595059dd9f22535a8b",
    },
    {
      // _id: '1',
      name: "Asus Vivo Book S15",
      slug: "asus-vivo-book-s15",
      image: "/images/products/product-img-2.jpg",
      price: 400,
      countInStock: 10,
      rating: 0,
      numReviews: 0,
      description: "high quality shirt",
      category: "63db33a611e790a8d8578a7b",
      createdBy: "63db31595059dd9f22535a8b",
    },
    {
      // _id: '1',
      name: "One Plus Nord 10",
      slug: "one-plus-nord-10",
      image: "/images/products/product-img-3.jpg",
      price: 400,
      countInStock: 10,
      rating: 0,
      numReviews: 0,
      description: "high quality shirt",
      category: "63db33a611e790a8d8578a7b",
      createdBy: "63db31595059dd9f22535a8b",
    },
  ],
};

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { dbName: "ecommerce" });
  } catch (err) {
    console.log(err);
  }
};
connectDB();

// const seedCategories = async () => {
//   await Category.insertMany(data.categories);
// };
const seedProducts = async () => {
  await Product.insertMany(data.products);
};

seedProducts();
