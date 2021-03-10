DROP DATABASE IF EXISTS employee_tracker_db;

CREATE DATABASE employee_tracker_db;

USE employee_tracker_db;

-- Department table
CREATE TABLE department (
-- Department id
id int not null,
-- Department name
name varchar(50),

PRIMARY KEY (id)
)

