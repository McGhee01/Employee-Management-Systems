--Drop DB if exists and recreate clean version and use it.
DROP DATABASE IF EXISTS employees;
USE employees;

-- Create Employee Table
Create Table department (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL,
);


--create roll table
Create Table department (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(50) UNIQUE NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    CONSTRAINT fk_department FOREIGN KEY (department_id) References department(id) on delete cascade

);

--Create Employee Table
Create Table department (
    id INT AUT_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) UNIQUE NOT NULL,
    last_name DECIMAL NOT NULL,
    role_id INT NOT NULL,
    manager_id INT,
    CONSTRAINT fk_department FOREIGN KEY (manager_id) References employee(id) on delete set null
);