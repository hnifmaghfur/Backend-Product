const multer = require("../utilities/multer");
const { resCustom } = require("../utilities/response");

const patchPhoto = (req, res, next) => {
  const upload = multer(4).single("photo");
  upload(req, res, (err) => {
    if (err) {
      resCustom(res, {
        status: 500,
        msg: "Internal Server Error",
      });
    }
    next();
  });
};

const postPhoto = (req, res, next) => {
  const upload = multer(4).single("photo");
  upload(req, res, (err) => {
    if (err) {
      resCustom(res, {
        status: 500,
        msg: "Internal Server Error",
      });
    }
    next();
  });
};

module.exports = { patchPhoto, postPhoto };
