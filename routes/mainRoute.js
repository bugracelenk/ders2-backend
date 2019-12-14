const express = require("express");
const router = express.Router();

const MainController = require("../controllers/mainController");

router.get("/get-data", MainController.get_data);
router.post("/post-data", MainController.post_data);

module.exports = router;