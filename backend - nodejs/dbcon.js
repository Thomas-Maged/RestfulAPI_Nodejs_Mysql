var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "db",
  user: "root",
  password: "secret",
  port: 3306,
  database: "personsDatabase"
});

module.exports = con;