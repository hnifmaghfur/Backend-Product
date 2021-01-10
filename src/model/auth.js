const query = require("../utilities/query");

module.exports = {
  register: (data) => query("INSERT INTO users SET ?", data),
  login: (data) =>
    query("SELECT id, password FROM users WHERE email=?", data),
};
