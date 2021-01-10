const query = require("../utilities/query");

const getQuery =
  "SELECT users.username AS store_name, users.location AS location, product.name, product.photo, transaction.value FROM  transaction JOIN product on transaction.id_product=product.id JOIN users ON transaction.id_seller = users.id WHERE transaction.id_buyer=? AND transaction.id_seller <> ? AND transaction.isActive = 1";

module.exports = {
  postPayload: (data) => query("INSERT INTO transaction SET ?", data),
  getPayload: (id) => query(getQuery, [id, id]),
};
