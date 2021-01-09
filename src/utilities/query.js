const { connection } = require("./db");

module.exports = (query, payload = null) => {
  return new Promise((resolve, reject) => {
    connection.query(query, payload, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};
