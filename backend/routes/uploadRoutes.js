const express = require("express");
const { uploadFile, upload } = require("../controllers/uploadController");
const router = express.Router();

router.post("/", upload.single("file"), uploadFile);
module.exports = router;
