INSERT INTO department (department_name)
VALUES
    ("IT"),
    ("Sales"),
    ("Operations"),
    ("Finance");

INSERT INTO role (title, salary, department_id)
VALUES
('Full Stack Developer', 200000, 1),
('Software Engineer', 150000, 1),
('Marketing Coordindator', 85000, 2), 
('Sales Lead', 90000, 2),
('Project Manager', 100000, 3),
('Operations Manager', 110000, 3),
('Accountant', 45000, 4), 
('Finanical Analyst', 150000, 4);

INSERT INTO employee ( first_name, last_name, role_id, manager_id)
VALUES
("Ebony", "Peralta", 1, NULL),
("Samira", "Davies", 2, 1),
("Paisley", "stone", 3, 2),
("Lacey", "Mendoza", 4, 3),
("Lacey", "Mendoza", 4, 3),
("Lacey", "Mendoza", 4, 3),
("Lacey", "Mendoza", 4, 3),
("Lacey", "Mendoza", 4, 3);

