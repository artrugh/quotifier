const { Router } = require("express");

const router = Router;

const userControllers = require("./controllers/userControllers");
router.post("/register", userControllers.addUser);

module.exports = router;
