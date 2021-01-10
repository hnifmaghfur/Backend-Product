const payloadModel = require("../model/payload");
const { customResponse, resCustom } = require("../utilities/response");

/* 
    @token : id as id_buyer

    @body : 
    amount, value, notes, id_product, id_seller

*/
const postPayload = async (req, res) => {
  try {
    const { id: id_buyer } = req.token;
    const data = req.body;
    const payload = await payloadModel.postPayload({
      ...data,
      id_buyer,
    });
    const response = customResponse(200, "Success", payload);

    resCustom(res, response);
  } catch {
    resCustom(res, { status: 500, msg: "failed Post" });
  }
};

/* 
    @token : id
*/
const getPayload = async (req, res) => {
  try {
    const { id } = req.token;
    console.log(id);
    const payload = await payloadModel.getPayload(id);
    const response = customResponse(200, "Success", payload);

    resCustom(res, response);
  } catch {
    resCustom(res, { status: 500, msg: "failed get" });
  }
};

module.exports = { postPayload, getPayload };
