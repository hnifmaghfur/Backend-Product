const searchModel = require("../model/search");
const { resCustom, customResponse } = require("../utilities/response");

/* 
      @query: 
      - q (search)
      - s (minimum / maximum) => value min/max
  */
const search = async (req, res) => {
  try {
    let order = req.query.s || "min";
    let limit = req.query.limit || 5;
    let page = limit * req.query.page || 0;
    if (order === "min") {
      const searching = await searchModel.searchMin(req.query.q, limit, page);
      const response = customResponse(200, "Success", searching);

      resCustom(res, response);
    } else {
      const searching = await searchModel.searchMax(req.query.q, limit, page);
      const response = customResponse(200, "Success", searching);

      resCustom(res, response);
    }
  } catch {
    resCustom(res, { status: 500, msg: "Not Found" });
  }
};

module.exports = { search };
