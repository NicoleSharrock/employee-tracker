const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username,
        user: process.env.DB_USER,
        // Your MySQL password
        password: process.env.DB_PASSWORD,
        // Your MySQL database
        database: process.env.DB_NAME
    },
    console.log('Connected to the inventory_db database.')
);

module.exports = db;