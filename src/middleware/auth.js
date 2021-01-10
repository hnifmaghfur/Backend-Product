const joi = require("joi");
const { customResponse, resCustom } = require("../utilities/response");

const registerValidate = (req, res, next) => {
  const schema = joi.object({
    email: joi.string().email({ minDomainSegments: 2 }).required(),
    password: joi.string().min(8).required(),
    username: joi.string().required(),
    location: joi.string().required(),
  });

  const validate = schema.validate(req.body);
  if (validate.error) {
    return resCustom(res, customResponse(400, validate.error.message));
  }

  next();
};

const loginValidate = (req, res, next) => {
  const schema = joi.object({
    email: joi.string().email({ minDomainSegments: 2 }).required(),
    password: joi.string().min(8).required(),
  });

  const validate = schema.validate(req.body);
  if (validate.error) {
    return resCustom(res, customResponse(400, validate.error.message));
  }

  next();
};

module.exports = { registerValidate, loginValidate };
