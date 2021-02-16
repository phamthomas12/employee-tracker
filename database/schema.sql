DROP DATABASE IF EXISTS CompanyList;

CREATE DATABASE CompanyList;

USE CompanyList;

CREATE TABLE employee (
  id INT NOT NULL,
  first_name VARCHAR(30) NULL,
  last_name VARCHAR(30) NULL,
  role_id INT NULL,
  manager_id INT NULL,
  PRIMARY KEY (id)
);
CREATE TABLE department (
  id INT NOT NULL,
  name VARCHAR(30) NULL,
  PRIMARY KEY (id)
);
CREATE TABLE role (
  id INT NOT NULL,
  salary DECIMAL NOT NULL,
  title VARCHAR(30) NOT NULL,
  department_id INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "John", "Smith", 12, 1);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (2, "David", "Nigel", 36, 1);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (3, "Jack", "Frost", 24, 2);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (4, "Lucy", "Lovington", 36, 2);

INSERT INTO role (id, title, salary, department_id)
VALUES (12, "Manager", "85000", 1);

INSERT INTO role (id, title, salary, department_id)
VALUES (24, "Engineer", "66000", 2);

INSERT INTO role (id, title, salary, department_id)
VALUES (36, "Mechanic", "55000", 2);

INSERT INTO department (id, name)
VALUES (1, "Boss");
INSERT INTO department (id, name)
VALUES (2, "Production");