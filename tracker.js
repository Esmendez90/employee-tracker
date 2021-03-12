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
  if (err) {
    console.error("error");
    connection.end();
  } else {
    askFirstQuestion();
  }
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
  let departments =
    "Select department.id, department.name, employee.id, employee.first_name, employee.last_name, employee.role_id, employee.manager_id, role.id, role.title, role.salary, role.department_id FROM department JOIN role ON department.id = role.department_id JOIN employee ON role.id = employee.role_id";

  connection.query(departments, (err, results) => {
    if (err) console.error(err);
    //console.log(results);
    console.table(results);
    console.log("See results above");
    askFirstQuestion();
  });
}

// View roles
function viewRoles() {
  let roles = "Select role.id, role.title, role.salary, role.department_id, employee.id, employee.first_name, employee.last_name, employee.role_id, employee.manager_id, department.id, department.name FROM department JOIN role ON department.id = role.department_id JOIN employee ON role.id = employee.role_id";
  connection.query(roles, (err, results) => {
    if (err) console.error(err);
    //console.log(results);
    console.table(results);
    console.log("See results above");
    askFirstQuestion();
  });
}

// View Employees
function viewEmployees() {
  connection.query("select * from employee", (err, results) => {
    if (err) console.error(err);
    //console.log(results);
    console.table(results);
    console.log("See results above");
    askFirstQuestion();
  });
}
