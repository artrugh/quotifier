const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userControllers");

router.post("/register", userControllers.addUser);
router.get("/login", userControllers.login_get);
router.post("/login", userControllers.login_post);
router.get("/logout", userControllers.logout_get);

module.exports = router;
