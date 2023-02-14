require("dotenv").config();
require("express-async-errors");
const path = require("path");
const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const mongoSanitize = require("express-mongo-sanitize");
const helmet = require("helmet");
const xss = require("xss-clean");
const rateLimit = require("express-rate-limit");
const hpp = require("hpp");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const errorHandler = require("./middlewares/error");
const mongoose = require("mongoose");
const connectDB = require("./config/dbConnection");
// connect to database
connectDB();
// Route files
const authRoutes = require("./routes/authRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const app = express();
// enable CORS
app.use(cors(corsOptions));
// body parser
app.use(express.json());
// cookie parser
app.use(cookieParser());

// dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// sanitize data
app.use(mongoSanitize());

// set security headers
app.use(helmet());

// prevent xss attacks
app.use(xss());

// Rate limiting
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 mins
  max: 100,
});
app.use(limiter);

// prevent http param pollution
app.use(hpp());

// set static folder
app.use(express.static(path.join(__dirname, "public")));
/* 

To Get Loading  Flavour in Frontend, Will Remove 


*/
app.use(function (req, res, next) {
  setTimeout(next, 1000);
  // next(new ErrorResponse("Please provide an email and password", 400));
  // res.json({ products: [] });
});
/* 

To Get Loading  Flavour in Frontend, Will Remove 


*/
// mount routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/categories", categoryRoutes);
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/orders", orderRoutes);
app.use("/api/v1/upload", uploadRoutes);
app.use("/api/v1/pay", paymentRoutes);
// not found route

// error middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

mongoose.connection.once("open", () => {
  console.log("Successfully connected to the MongoDB database");
  app.listen(PORT, () =>
    console.log(
      `Server running in ${process.env.NODE_ENV} mode on PORT: ${PORT}`
    )
  );
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});
