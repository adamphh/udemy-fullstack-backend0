require('dotenv').config();

const mysql = require('mysql2/promise');

// const connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: process.env.DB_NAME
// });

const connection = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,

    waitForConnections: true,
    connectionLimit: 10,    // tối đa có 10 connection tại 1 thời điểm
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0
})

module.exports = connection;