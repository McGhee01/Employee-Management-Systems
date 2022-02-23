const fs = require('fs');
const mysql = require('mysql');
const inquirer = require('inquirer');
const ctable = require('console.table');
// const echo = require('node-echo');

const connection = mysql.createConnection({
    host: 'localhost',
    port:3306,
    user:"root",
    password:"root",
    database: "emptrack_db"
});

connection.connect(function(err) {
    if (err) throw err;
    empTrack();
});

function empTrack(){
    inquirer
    .prompt([
    {
        type: "list",
        name: "options",
        message: "What would you like to do?",
        choices: [
            "View All Emplyees",
            "View All Emplyees By Department",
            "View All Employees By Manager",
            "Add Employees",
            "RemoveEmployee",
            "Update Employee Role",
            "Update Employee Manager",
            "Exit"

        ],
        name:"Choice"
    }
    ])
    .then(function(res) {
        console.log(res.choice);

        switch (res.choice) {
            case "View All Employees":
                employeeView();
                break;

            case "View All Employees By Department":
                departmentView();
                break;

            case "View All Employees By Manager":
                managerView();
                break;

            case "Add Employee":
                employeeAdd();
                break;

            case "Remove Employee":
                EmployeeRemove();
                break;

            case "Update Employee Role":
                employeeManager();
                break;

            case "Update Manager":
                employeeUpdate();
                break;

            case "Quit":
                connection.end();
                break;
            
        
        }
    })
}

const employeeView = (inputs = []) => {
    inquirer 
    .prompt({
        name: "employeeView",
        type: "input",
        message: "Enter Employee Last Name to Begin Search"
    })
    .then(function(choice) {
        let query = "SELECT first_name, id FROM employee WHERE?"
        connection.query(query, {last_name: choice.employeeView}, function(err,res
            ){
                if(err) throw err;

                for (var i = 0; i < res.length; i++) {
                    console.log(
                        " | First Name: " + res[i].first_name +
                        " | Last Name: " + res[i].last_name +
                        " | Id " + res[i].id
                    );
                }
            });
            empTrack()
    });
} 
 const departmentView = (res) => {
     let query = "SELECT dept_name FROM department";
     connection.query(query, function(err,res) {
         for (var i = 0 < res.length; i++;) {
             console.log(res[i].name);
         }
     });
     }

     const managerView = (res) => {
         let query = "SELECT mgr_is, first_name, last_name FROM employee WHERE mgr_id IN (SELECT mgr_id IS NOT NULL)";
         connection.query(query, function(err,res) {

            if(err) throw err;

            for (var i = 0; i < res.length; i++) {
                console.log(
                    res[i].first_name + " " +
                    res[i].last_name + " || Id: " +
                    res[i].id
                );
            }
         })
         menu();
     }

     const employeeAdd = () => {
         inquirer
         .prompt({
             name: "employeeAdd",
             type: "input",
             message: "Enter Employee First Name Then Last Name"
         })

         .then(function(answer) {
             console.log(answer);
             
             let name = answer.employeeAdd;
             let firstAndLastName = name.split("");
             console.log(firstAndLastName);

             let query = "INSERT INTO employee (first_name, last_name) VALUES ?";
             connection.query(query, [[firstAndLastName]], function(err, res) {
                 if (err) throw err;
                 console.log(err);
             });
             empTrack();
         });
     }

     const EmployeeRemove = () => {
        inquirer
        .prompt({
            name: "employeeRemove",
            type: "input",
            message: "What Employee Would You Like To Remove?",
        })
        
        .then(function() {
            console.log(choice)
            let query = "DELETE FROM employee WHERE?";
            let delId = Number(choice.EmployeeRemove); 
            console.log(delId);
            connection.query(query, { id: delId}, function(err, res) {
                if (err) throw err;

                for(var i = 0; i < res.length; i++) {
                    console.log(res[i].EmployeeRemove);
                }
                empTrack();
            });
        });
    }

    const employeeUpdate = () => {
        inquirer
        .prompt({
          name: "employeeUpdate",
          type: "input",
          message: "Enter employee id",
        })
        .then(function (choice) {
          let id = choice.id;
      
          inquirer
            .prompt({
              name: "roleId",
              type: "input",
              message: "Enter role id",
            })
            .then(function (choice) {
              let empId = choice.empId;
      
              let query = "UPDATE employee SET role_id=? WHERE id=?";
              connection.query(query, [empId, id], function (err, res) {
                if (err) {
                  console.log(err);
                }
                empTrack();
              });
            });
        });
      }
      const employeeManager = () => {
        inquirer
          .prompt({
            name: "employeeManager",
            type: "input",
            message: "What employee would you like to update the manager for?"
          })
          .then(function() {
            let query = "SELECT manager_id FROM employee WHERE ?";
            connection.query(query, function(err, res) {
              if (err) throw err;
      
              for (var i = 0; i < res.length; i++) {
                console.log(res[i].employee);
              }
              empTrack();
            });
          });
      }