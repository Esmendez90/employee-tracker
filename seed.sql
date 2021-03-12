use employee_tracker_db;

Insert into department (name)
Values ("Heart Transplant"), ("Electrophysiology");

Insert into role (title, salary, department_id)
Values ("Surgery RN", 80000, 1), ("EP Doctor", 100000, 2);

Insert into employee (first_name, last_name, role_id, manager_id)
Values ("Liz", "Velez", 1, null), ("Eric", "Liberman", 2, null);

select * from department;
select * from role;
select * from employee;

Select * from department a 
JOIN role b
ON (a.id = b.department_id);

-- View table by departments
Select department.id, department.name, employee.id, employee.first_name, employee.last_name, employee.role_id, employee.manager_id,
role.id, role.title, role.salary, role.department_id
FROM department 
JOIN role ON department.id = role.department_id 
JOIN employee ON role.id = employee.role_id;

-- View table by role
Select role.id, role.title, role.salary, role.department_id, employee.id, employee.first_name, employee.last_name, employee.role_id, employee.manager_id, department.id, department.name
FROM department 
JOIN role ON department.id = role.department_id 
JOIN employee ON role.id = employee.role_id;

