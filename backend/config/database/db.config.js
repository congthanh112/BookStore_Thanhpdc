const mysql = require("mysql");

// Create a connection to the database
const dbConn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "bookstore_thanhpdc"
});

// open the MySQL connection
dbConn.connect(error => {
  if (error) throw error;
  console.log("Connect to MySQL Database successfully.");
});

module.exports = dbConn;