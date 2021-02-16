const firstQuestion = [
    {
        name: "intro",
        type: "list",
        message: "What would you like to do?",
        choices: [
            "View All Employees",
            "Add Employee",
            "Remove Employee",
            "Update Employee Role",
        ]
    }
];

const addEmployeeQuestion = [
    {
        name: "firstName",
        type: "input",
        message: "What is the Employee's first name?"
    },
    {
        name: "lastName",
        type: "input",
        message: "What is the employee's last name?"
    },
    {
        name: "employeeRole",
        type: "input",
        message: "What is the employee's role ID?",

    },
    {
        name: "employeeManager",
        type: "input",
        message: "Who is the employee's manager ID? (leave blank if none)",
    },
];

const updateEmployeeRole = [
    {
        name: "updateEmployeeRole",
        type: "input",
        message: "Enter the Employee's ID that you want to update.",
    },
    {
        name: "newRole",
        type: "input",
        message: "Enter the ID of the Employee's new role.",
    }
];

const removeEmployee = [
    {
        name: "removeEmployee",
        type: "input",
        message: "Enter the Employee's ID that you want to remove."
    }
]


module.exports.firstQuestion = firstQuestion;
module.exports.addEmployeeQuestion = addEmployeeQuestion;
module.exports.updateEmployeeRole = updateEmployeeRole;
module.exports.removeEmployee = removeEmployee;