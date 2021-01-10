const express = require("express");
const router = express.Router();

const authController = require("../controller/auth");
const middleware = require("../middleware/auth");

router.post("/register", middleware.registerValidate, authController.register);
router.post("/login", middleware.loginValidate, authController.login);

module.exports = router;
