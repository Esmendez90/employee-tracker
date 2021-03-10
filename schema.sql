DROP DATABASE IF EXISTS employee_tracker_db;

CREATE DATABASE employee_tracker_db;

USE employee_tracker_db;

-- Department table
CREATE TABLE department (
-- Department id
id int not null auto_increment,
-- Department name
name varchar(50),

primary key(id)
);

-- Role table
CREATE TABLE role (
id int not null auto_increment,
title varchar(50) not null,
salary decimal,
department_id int,

primary key(id),
FOREIGN KEY (department_id) REFERENCES department(id)
);

-- Employee table
CREATE TABLE employee (
id int not null auto_increment,
first_name varchar(50) not null,
last_name varchar(50) not null,
role_id int not null,
manager_id int,

primary key(id)

);

Insert into department (name)
Values ("Echo"), ("EKG"), ("Holter");

select * from department;

