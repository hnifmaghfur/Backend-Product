const { customResponse, resCustom } = require("../utilities/response");
const productModel = require("../model/product");

const getProducts = async (req, res) => {
  try {
    const products = await productModel.getProducts();
    const response = customResponse(200, "Success", products);

    resCustom(res, response);
  } catch {
    resCustom(res, { status: 500, msg: "Bad Request", data: null });
  }
};

/*
    @params : id
*/
const getProduct = async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;
    const product = await productModel.getProduct(id);
    const response = customResponse(200, "Success", product);

    resCustom(res, response);
  } catch {
    resCustom(res, { status: 500, msg: "Bad Request", data: null });
  }
};

/*
    @params : id

    @body :
    name, price

    @file : photo
*/
const patchProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    if (req.file) {
      const photo = "/images/" + req.file.filename;
      const product = await productModel.patchProduct(id, {
        ...data,
        photo: `${photo}`,
      });
      const response = customResponse(200, "Success", product);

      resCustom(res, response);
    } else {
      const product = await productModel.patchProduct(id, data);
      const response = customResponse(200, "Success", product);

      resCustom(res, response);
    }
  } catch {
    resCustom(res, { status: 500, msg: "Bad Request", data: null });
  }
};

/*
    @token : id as id_store

    @body :
    name, price

    @file : photo
*/
const postProduct = async (req, res) => {
  try {
    const { id } = req.token;
    console.log(req);
    const data = req.body;
    const photo = req.file.filename;
    const product = await productModel.postProduct({
      ...data,
      photo: `${photo}`,
      id_store: id,
    });
    console.log(product);
    const response = customResponse(200, "Success", product);

    resCustom(res, response);
  } catch {
    resCustom(res, { status: 500, msg: "Bad Request", data: null });
  }
};

/*
    @params : id
*/
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productModel.deleteProduct(id);
    const response = customResponse(200, "Success", product);

    resCustom(res, response);
  } catch {
    resCustom(res, { status: 500, msg: "Bad Request", data: null });
  }
};

module.exports = {
  getProducts,
  getProduct,
  patchProduct,
  postProduct,
  deleteProduct,
};
