const express = require("express");
const router = express.Router();
const { validate } = require("../utilities/validate");
const payloadController = require("../controller/payload");

router.post("/", validate, payloadController.postPayload);
router.get("/", validate, payloadController.getPayload);
module.exports = router;
