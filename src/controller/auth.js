const { resCustom, customResponse } = require("../utilities/response");
const authModel = require("../model/auth");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/*
    @body :
    email, password, username, balance, location    
*/
const register = async (req, res) => {
  try {
    const { password } = req.body;
    const data = req.body;
    delete data.password;
    const hashPassword = bcrypt.hashSync(password, 10);
    const user = await authModel.register({ ...data, password: hashPassword });
    const response = customResponse(200, "Success", user);
    resCustom(res, response);
  } catch {
    resCustom(res, { status: 500, msg: "Bad request", data: null });
  }
};

/*
    @body :
    email, password 
*/
const login = async (req, res) => {
  try {
    const check = await authModel.login(req.body.email);
    // console.log(check[0].password);
    bcrypt.compare(req.body.password, check[0].password, (err, result) => {
      if (err) {
        resCustom(res, { status: 500, msg: "Bad request", data: null });
      }
      if (result) {
        const token = jwt.sign({ id: check[0].id }, process.env.SECRET);
        const response = customResponse(200, "Success", token);
        resCustom(res, response);
      } else {
        resCustom(res, { status: 500, msg: "Wrong Password", data: null });
      }
    });
  } catch {
    resCustom(res, { status: 500, msg: "Bad request", data: null });
  }
};

module.exports = { register, login };
