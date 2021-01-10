const query = require("../utilities/query");

module.exports = {
  searchMin: (q, limit, page) =>
    query(
      "SELECT product.name, product.price, product.photo, users.location FROM product JOIN users ON product.id_store = users.id WHERE product.name LIKE ? ORDER BY product.price ASC LIMIT ? OFFSET ?",
      [`%${q}%`, limit, page]
    ),
  searchMax: (q, limit, page) =>
    query(
      "SELECT product.name, product.price, product.photo, users.location FROM product JOIN users ON product.id_store = users.id WHERE product.name LIKE ? ORDER BY product.price DESC LIMIT ? OFFSET ?",
      [`%${q}%`, limit, page]
    ),
};
