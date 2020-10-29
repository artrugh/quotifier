const express = require("express");
const router = express.Router();
const { requireAuth, checkUser } = require("../middleware/authMiddleware");
const userControllers = require("../controllers/userControllers");

router.post("/register", userControllers.addUser);
router.post("/login", userControllers.login);
router.get("/logout", userControllers.logout);
router.patch("/update-user", checkUser, userControllers.updateUser);

module.exports = router;
