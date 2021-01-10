const express = require("express");
const router = express.Router();

const { validate } = require("../utilities/validate");
const productController = require("../controller/product");
const middleware = require("../middleware/product");
const upload = require("../middleware/handlePhoto");

router.get("/all", validate, productController.getProducts);
router.get("/:id", validate, productController.getProduct);
router.patch(
  "/:id",
  validate,
  upload.patchPhoto,
  middleware.patchValidate,
  productController.patchProduct
);
router.post(
  "/",
  validate,
  upload.postPhoto,
  middleware.postValidate,
  productController.postProduct
);
router.delete("/:id", validate, productController.deleteProduct);

module.exports = router;
