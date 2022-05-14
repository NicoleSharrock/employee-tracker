const { prompt } = require('inquirer');
const table = require('console.table');
const mysql = require('mysql2');


const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'coding',
        database: 'inventory_db'
    },
    console.log('Connected to the inventory_db database.')
);


function questions() {
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
                'Update an employee role',
                'Exit'
            ],
        },
    ])
        .then((answer) => {
            switch (answer.options) {
                case 'View all departments':
                    viewAllDepartments();
                    break;
                case 'View all roles':
                    viewAllRoles();
                    break;
                case 'View all employees':
                    viewAllEmployees();
                    break;
                case 'Add a department':
                    addDepartment();
                    break;
                case 'Add a role':
                    addRole();
                    break;
                case 'Add an employee':
                    addEmployee();
                    break;
                case 'Update an employee role':
                    updateEmployeeRole();
                    break;
                default:
                    process.exit();
            }
        });
}


function viewAllDepartments() {
    const sql = `SELECT * FROM departments`;
    db.query(sql, (err, res) => {
        if (err) {
            console.log(err.message);
            res.serverStatus(500).json({ error: err.message });
            return;
        }
        console.table(res);
    });
};

function viewAllRoles() {
    const sql = `SELECT * FROM role`;
    db.query(sql, (err, res) => {
        if (err) {
            console.log(err.message);
            res.serverStatus(500).json({ error: err.message });
            return;
        }
        console.table(res);
    });
};


function viewAllEmployees() {
    const sql = `SELECT * FROM employee`;
    db.query(sql, (err, res) => {
        if (err) {
            console.log(err.message);
            res.serverStatus(500).json({ error: err.message });
            return;
        }
        console.table(res);
    });
};


function addDepartment() {
    const sql = `INSERT INTO departments (department_name) VALUES ('?')`;
    db.query(sql, (err, result) => {
        if (err) {
            console.log(err)
            return;
        }
        console.log('Hello World!!!');
    }
    )
};