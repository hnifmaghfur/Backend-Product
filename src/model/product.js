const query = require("../utilities/query");

const queryProducts = "SELECT * FROM product";

const queryProduct = "SELECT * FROM product WHERE id=?";

module.exports = {
  getProducts: () => query(queryProducts),
  getProduct: (id) => query(queryProduct, id),
  patchProduct: (id, data) =>
    query("UPDATE product SET ? WHERE id=?", [data, id]),
  postProduct: (data) => query("INSERT INTO product SET ?", data),
  deleteProduct: (id) => query("DELETE FROM product WHERE id=?", id),
};
