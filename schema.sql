DROP DATABASE IF EXISTS employee_tracker_db;

CREATE DATABASE employee_tracker_db;

USE employee_tracker_db;

-- Department table
CREATE TABLE department (
-- Department id
id int auto_increment PRIMARY KEY,
-- Department name
name varchar(30)

);

-- Role table
CREATE TABLE role (
id int not null auto_increment PRIMARY KEY,
title varchar(30) not null,
salary decimal,
department_id int,

FOREIGN KEY (department_id) REFERENCES department(id)
);

-- Employee table
CREATE TABLE employee (
id int not null auto_increment PRIMARY KEY,
first_name varchar(30) not null,
last_name varchar(30) not null,
role_id int,
manager_id int,

FOREIGN KEY (role_id) REFERENCES role(id)

-- This FK should refenence to a NEW (newly created) employee id 
-- FOREIGN KEY (manager_id) REFERENCES employee(id)
);



