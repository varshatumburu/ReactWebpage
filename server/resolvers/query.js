var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "db",
});

connection.connect();

const getData = (parent, args) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT info FROM data WHERE id= ?`,
      [args.id],
      function (error, result, fields) {
        error ? reject(error) : resolve(result[0].info);
      }
    );
  });
};

module.exports = getData;
