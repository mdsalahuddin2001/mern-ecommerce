const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { dbName: "ecommerce" });
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
