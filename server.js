var connection = require("./database/connection.js");
var inquirer = require("inquirer");
require("console.table");
var questions = require("./database/questions.js")

function askFirstQuestion() {
    inquirer.prompt(questions.firstQuestion).then(function (answer) {
        switch(answer.intro) {
            case "View All Employees":
                viewAllEmployees();
            break;
            case "Add Employee":
                addEmployee();
            break;
            case "Remove Employee":
                removeEmployee();
            break;
            case "Update Employee Role":
                updateEmployeeRole();
            break;
            case "Add Department":
                addDepartment();
            break;
            case "View Department":
                viewDepartment();
            break;
            case "View Role":
                viewRole();
            break;
            case "Add Role":
                addRole();
            break;
            
        }
    })
};

askFirstQuestion()

function viewAllEmployees() {
    connection.query(
        `SELECT id, first_name, last_name, role_id, manager_id FROM employeetracker.employee`,
        function (err, result) {
            if (err) throw err;
            console.table(result);
            askFirstQuestion();
        }
    )
}

function addEmployee() {
    inquirer.prompt(questions.addEmployeeQuestion).then(function (answer) {
        if ((answer.employeeManager = "undefined")) {
            answer.employeeManager = 0;
          }
    connection.query(
        "INSERT INTO `employeetracker`.`employee` (`first_name`, `last_name`, `role_id`, `manager_id`) VALUES ('" + answer.firstName + "', '" + answer.lastName + "', '" + answer.employeeRole + "','" + answer.employeeManager + "');",
            function (err, result) {
                if (err) throw err;
                console.table(result);
                askFirstQuestion();
            }
        )
    })
}

function removeEmployee() {
    connection.query(
    `SELECT id, first_name, last_name, role_id, manager_id FROM employeetracker.employee`,
    function (error, result) {
        console.table(result);
        inquirer.prompt(questions.removeEmployee).then(function (answer) {
            result.forEach((element) => {
                employeeId = parseInt(answer.removeEmployee);
                if (element.id === employeeId) {
                    connection.query(
                        `DELETE from employeetracker.employee where id = ${employeeId}`,
                        askFirstQuestion()
                    );
                }
            });
    });
    }
);
}   
    
function updateEmployeeRole() {
    connection.query(
        `SELECT id, first_name, last_name, role_id, manager_id FROM employeetracker.employee`,
            function (error, result) {
                console.table(result);
                inquirer.prompt(questions.updateEmployeeRole).then(function (answer) {
                    connection.query(
                        "UPDATE `employeetracker`.`employee` SET `role_id` = '" + answer.newRole +  "' WHERE (`id` = '"+ answer.updateEmployeeRole +"');",
                        function (error, result) {
                            if(error) console.log(error)
                            askFirstQuestion()
                        }
                    )
                }
            );
        }
    )
}

function viewDepartment() {
    connection.query(
        `SELECT id, name FROM employeetracker.department`,
        function (err, result) {
            if (err) throw err;
            console.table(result);
            askFirstQuestion();
        }
    )
}

function addDepartment() {
    inquirer.prompt(questions.addDepartment).then(function (answer) {
    connection.query(
        "INSERT INTO `employeetracker`.`department` (`name`, `id`) VALUES ('" + answer.deptName + "', '" + answer.deptID + "');",
            function (err, result) {
                if (err) throw err;
                console.table(result);
                askFirstQuestion();
            }
        )
    })
}

function viewRole() {
    connection.query(
        `SELECT id, title, salary, department_id FROM employeetracker.role`,
        function (err, result) {
            if (err) throw err;
            console.table(result);
            askFirstQuestion();
        }
    )
}

function addRole() {
    inquirer.prompt(questions.addRole).then(function (answer) {
    connection.query(
        "INSERT INTO `employeetracker`.`role` (`id`, `title`, `salary`, `department_id`) VALUES ('" + answer.roleID + "', '" + answer.roleTitle + "', '" + answer.roleSalary + "', '" + answer.roleDeptID + "');",
            function (err, result) {
                if (err) throw err;
                console.table(result);
                askFirstQuestion();
            }
        )
    })
}