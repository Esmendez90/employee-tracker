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

// Check connection to mysql
connection.connect((err) => {
  if (err) {
    console.error("error");
    connection.end();
  } else {
    askFirstQuestion();
  }
});

// Prompt first question
function askFirstQuestion() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "SELECT A TASK FROM THE MENU",
        choices: [
          "ADD department",
          "ADD role",
          "ADD employee",
          "VIEW departments",
          "VIEW roles",
          "VIEW employees",
          "UPDATE employee roles",
          "EXIT",
        ],
        name: "task",
      },
    ])
    .then((answers) => {
      //console.log(answers);
      const { task } = answers;
      if (task === "ADD department") {
        addDepartment();
      } else if (task === "ADD role") {
        addRole();
      } else if (task === "ADD employee") {
        addEmployee();
      } else if (task === "VIEW departments") {
        viewDepartments();
      } else if (task === "VIEW roles") {
        viewRoles();
      } else if (task === "VIEW employees") {
        viewEmployees();
      } else if (task === "UPDATE employee roles") {
        updateEmployeeRoles();
      } else if (task === "EXIT") {
        connection.end();
        console.log("GOODBYE!");
      }
    });
}

// Add department
function addDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the name of the department you are adding?",
        name: "name",
        validate: (input) => {
          if (input.trim().length <= 2) {
            return "Please input a name greater than 2 characters.";
          } else {
            return true;
          }
        },
      },
    ])
    .then((answer) => {
      console.log("Below is the department that will be created");
      console.log(answer);
      insertDepatment(answer);
    });
}

function insertDepatment(data) {
  connection.query("INSERT INTO department SET ?", data, (err) => {
    if (err) return console.error(err);
    console.log("passed in value");
    console.log(data);
    console.log("New department has been added to database.");
    askFirstQuestion();
  });
}

// Add role
function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What role are you adding?",
        name: "title",
        validate: (input) => {
          if (input.trim().length <= 2) {
            return "Please input a title greater than 2 characters.";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        message: "What is the salary for this role?",
        name: "salary",
        validate: (input) => {
          if (isNaN(parseInt(input))) {
            return "Please input a real number, sir/madam.";
          } else {
            // valid input
            return true;
          }
        },
      },
      
      
    ])
    .then((answer) => {
      console.log("Below is the role that will be created");
      console.log(answer);
      insertRole(answer);
    });
}

function insertRole(data) {
  connection.query("INSERT INTO role SET ?", data, (err) => {
    if (err) return console.error(err);
    console.log("passed in value");
    console.log(data);
    console.log("New role has been added to database.");
    askFirstQuestion();
  });
}

// Add employee
function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your first name?",
        name: "first_name",
        validate: (input) => {
          if (input.trim().length <= 2) {
            return "Please input a name greater than 2 characters.";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        message: "What is your last name?",
        name: "last_name",
        validate: (input) => {
          if (input.trim().length <= 2) {
            return "Please input a name greater than 2 characters.";
          } else {
            return true;
          }
        },
      },
      
      
    ])
    .then((answer) => {
      console.log("Below is the employee that will be created");
      console.log(answer);
      insertEmployee(answer);
    });
}

function insertEmployee(data) {
  connection.query("INSERT INTO employee SET ?", data, (err) => {
    if (err) return console.error(err);
    console.log("passed in value");
    console.log(data);
    console.log("New employee has been added to database.");
    askFirstQuestion();
  });
}

// View departments
function viewDepartments() {
  //let departments =
  //  "Select department.id, department.name, employee.id, employee.first_name, employee.last_name, employee.role_id, employee.manager_id, role.id, role.title, role.salary, role.department_id FROM department JOIN role ON department.id = role.department_id JOIN employee ON role.id = employee.role_id";
  let departments = "SELECT * FROM department";
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
  //let roles =
  // "Select role.id, role.title, role.salary, role.department_id, employee.id, employee.first_name, employee.last_name, employee.role_id, employee.manager_id, department.id, department.name FROM department JOIN role ON department.id = role.department_id JOIN employee ON role.id = employee.role_id";
  let roles = "SELECT * FROM role";
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
  let employees =
    "Select employee.id, employee.first_name, employee.last_name, employee.role_id, employee.manager_id, role.id, role.title, role.salary, role.department_id, department.id, department.name FROM department JOIN role ON department.id = role.department_id JOIN employee ON role.id = employee.role_id";
  connection.query(employees, (err, results) => {
    if (err) console.error(err);
    //console.log(results);
    console.table(results);
    console.log("See results above");
    askFirstQuestion();
  });
}
