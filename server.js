const inquirer = require("inquirer");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Meg@deth6",
  port: 3306,
  // Create database in mysql
  database: "somedatabase_db"
});

connection.connect((err) => {
  err ? console.error(err) : runFunction();
});

function runFunction() {
    console.log("lets see if it works!");
}
