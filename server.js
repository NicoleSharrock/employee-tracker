const { prompt } = require('inquirer');



prompt([

    {
        type: 'list',
        name: 'options',
        message: 'What would you like to do?',
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role']
    }
])
    .then((answer) => {
        switch (answer.options) {
            case 'View all departments':
                ViewAllDepartments();
                break;
            case 'View all roles':
                ViewAllRoles();
                break;
            case 'View all employees':
                ViewAllEmployees();
                break;
            case 'Add a department':
                AddDepartment();
                break;
            case 'Add a role':
                AddRole();
                break;
            case 'Add an employee':
                AddEmployee();
                break;
            case 'Update an employee role':
                UpdateEmployeeRole();
                break;
        }

    });