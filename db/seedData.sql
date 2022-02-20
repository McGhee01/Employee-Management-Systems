use employees;

--Insert Data To Department Table
INSERT INTO department(name)

VALUES ('Development'), ('Quality Assurance'), ('Human Resources'), ('Operations');


-- Insert Data into Role Table
INSERT INTO Role (title, salary, department_id)

VALUES
('Development Lead', 150000, 1), ('Developer', 100000, 1),
('Lead Test Engineer', 150000, 2), ('Test Engineer', 100000, 2),
('HR Manager', 110000, 3), ('HR Represenative', 80000, 3),
('Operations Lead', 140000, 4), ('Operations Engineer', 90000, 4);

-- Insert Data into Employee Table
INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Lorraine', 'Lee', 1, NULL), ('Dan', 'Ditko', 2, 1), ('John', 'McCurry', 3, NULL),
    ('Bree', 'Eisenhower', 4, 3), ('Brad', 'Thompson', 5, NULL), ('Patrick', 'Star', 6, 5),
    ('David', 'Owens', 7, NULL), ('Jake', 'Krouse', 8, 7);