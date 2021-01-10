const express = require("express");
const router = express.Router();
const { validate } = require("../utilities/validate");
const { search } = require("../controller/search");

router.get("/search", validate, search);
module.exports = router;
