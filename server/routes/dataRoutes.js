const express = require("express");
const router = express.Router();
const dataControllers = require("../controllers/dataControllers");
const { requireAuth, checkUser } = require("../middleware/authMiddleware");

// addSource, updateSource, addQuote, updateQuote
router.post("/addSource", checkUser, dataControllers.addSource);
router.post("/addQuote", checkUser, dataControllers.addQuote);

module.exports = router;
