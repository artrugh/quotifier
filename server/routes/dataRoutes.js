const express = require("express");
const router = express.Router();
const dataControllers = require("../controllers/dataControllers");
const { requireAuth, checkUser } = require("../middleware/authMiddleware");

// addSource, updateSource, addQuote, updateQuote
router.post("/addSource", checkUser, dataControllers.addSource);
router.post("/addQuote", checkUser, dataControllers.addQuote);
router.get("/getSources", checkUser, dataControllers.getSources);
router.get("/getQuotes", checkUser, dataControllers.getQuotes);
router.get("/getSource/:id", checkUser, dataControllers.getOneSource);
router.get("/getQuote/:id", checkUser, dataControllers.getOneQuote);
router.patch("/updateQuote/:id", checkUser, dataControllers.updateQuote);
router.patch("/updateSource/:id", checkUser, dataControllers.updateSource);
router.delete("/deleteQuote/:id", checkUser, dataControllers.deleteQuote);
router.delete("/deleteSource/:id", checkUser, dataControllers.deleteSource);

module.exports = router;
