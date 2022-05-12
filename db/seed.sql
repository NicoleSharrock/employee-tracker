INSERT INTO department (department_name)
VALUES
    ("HR"),
    ("Sales"),
    ("Production"),
    ("Fianace");

INSERT INTO role (title, salary, department_id)
VALUES
("Mangaer", 100000, 1),
("Sales associate", 80000, 2),
("cashier", 30000, 3);

INSERT INTO employee ( first_name, last_name, role_id, manager_id)
VALUES
("Ebony", "Peralta", 1, NULL),
("Samira", "Davies", 2, 1),
("Paisley", "stone", 3, 2),
("Lacey", "Mendoza", 4, 3);

