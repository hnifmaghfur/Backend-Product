const mysql = require("mysql");

const connection = mysql.createConnection({
  host: process.env.DB_HOSTNAME || "localhost",
  user: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_DATABASE || "ecommerce",
});

connection.connect();
module.exports = conn;

const connect = () => {
  connection.connect((err) => {
    if (err) {
      console.log("restart database");
      setTimeout(connect, 2000);
    }

    console.log("connected");
  });

  connection.on("error", (err) => {
    console.log(err);
    if (err) {
      connect();
    }
  });
};

exports.dbConnect = connect;
