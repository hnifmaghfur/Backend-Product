const jwt = require("jsonwebtoken");
const { resCustom } = require("../utilities/response");

const validate = (req, res, next) => {
  let bearerToken = req.headers["authorization"];
  if (typeof bearerToken === "undefined")
    return resCustom(res, { status: 500, msg: "Not authorization" });

  bearerToken = bearerToken.split(" ")[1];
  if (!bearerToken) return resCustom(res, { status: 500, msg: "Bad Request" });

  jwt.verify(bearerToken, process.env.SECRET, (err, data) => {
    if (err) return resCustom(res, { status: 500, msg: "Bad Request" });

    req.token = data;
    next();
  });
};

module.exports = { validate };
