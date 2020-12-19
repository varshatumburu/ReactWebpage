var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "db",
});

connection.connect();

const sendMessage = (parent, args) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO messages(email,message) VALUES (?,?)`,
      [args.email, args.message],
      function (error, result, fields) {
        error ? reject(error) : resolve(args);
      }
    );
  });
};

module.exports = sendMessage;
