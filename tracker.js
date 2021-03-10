const inquirer = require("inquirer");
const mysql = require("mysql");
const consoleTable = require("console.table");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Meg@deth6",
  port: 3306,
  // Create database in mysql
  database: "employee_tracker_db",
});

connection.connect((err) => {
  err ? console.error(err) : askFirstQuestion();
});

function askFirstQuestion() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "SELECT A TASK FROM THE MENU",
        choices: [
          "VIEW departments",
          "VIEW roles",
          "VIEW employees",
          "ADD departments",
          "ADD roles",
          "ADD employee",
          "UPDATE employee roles",
        ],
        name: "task",
      },
    ])
    .then((answers) => {
      //console.log(answers);
      const { task } = answers;
      if (task === "VIEW departments") {
        viewDepartments();
      } else if (task === "VIEW roles") {
        viewRoles();
      } else if (task === "VIEW employees") {
        viewEmployees();
      } else if (task === "ADD departments") {
        addDepartments();
      } else if (task === "ADD roles") {
        addRoles();
      } else if (task === "ADD employee") {
        addEmployee();
      } else if (task === "UPDATE employee roles") {
        updateEmployeeRoles();
      } else {
        connection.end();
        console.log("GOODBYE!");
      }
    });
}
// View departments
function viewDepartments() {
  connection.query("select * from department", (err, results) => {
    if(err) console.error(err);
    //console.log(results);
    console.table(results);
    console.log("See results above")
    askFirstQuestion();
  });
}

// View roles
function viewRoles() {
  console.log("roles friend")
}

// View Employees
function viewEmployees() {
  console.log("employees here")
}

