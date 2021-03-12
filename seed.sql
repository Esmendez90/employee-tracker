use employee_tracker_db;

Insert into department (name)
Values ("Heart Transplant");

Insert into role (title, salary, department_id)
Values ("Surgery RN", 80000, 1);

Insert into employee (first_name, last_name, role_id, manager_id)
Values ("Liz", "Velez", 1, null);

select * from department;
select * from role;
select * from employee;