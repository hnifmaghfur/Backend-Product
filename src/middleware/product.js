const joi = require("joi");
const { customResponse, resCustom } = require("../utilities/response");

const patchValidate = (req, res, next) => {
  const schema = joi.object({
    name: joi.string(),
    price: joi.number(),
    id_store: joi.number(),
  });

  const validate = schema.validate(req.body);
  if (validate.error) {
    return resCustom(res, customResponse(400, validate.error.message));
  }

  next();
};

const postValidate = (req, res, next) => {
  const schema = joi.object({
    name: joi.string().required(),
    price: joi.number().required(),
  });

  const validate = schema.validate(req.body);
  if (validate.error) {
    return resCustom(res, customResponse(400, validate.error.message));
  }

  next();
};

module.exports = { patchValidate, postValidate };
