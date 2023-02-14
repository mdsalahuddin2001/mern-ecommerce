const express = require("express");
const {
  addCategory,
  getCategories,
  updateCategories,
  deleteCategories,
} = require("../controllers/categoryController");

const router = express.Router();

router.get("/", getCategories);
router.post("/", addCategory);
router.post("/update", updateCategories);
router.post("/delete", deleteCategories);

module.exports = router;
