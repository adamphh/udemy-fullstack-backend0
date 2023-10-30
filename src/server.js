// Muốn dùng .env  thì bắt buộc phải khai báo dòng này
require('dotenv').config()
const express = require('express')  //  commonjs
//  import express  from 'express' // es modules (can co babel moi chay duoc)

const viewEngineConfig = require('./config/viewEngineConfig');
const webRoutes = require('./routes/web');

// Da khai bao trong file ./config/database.js
//const mysql = require('mysql2');
const connection = require('./config/database');

console.log(" >>> check env", process.env.HOST_NAME)

const app = express()   // app express
const port = process.env.PORT || 8080       // port
const host_name = process.env.HOST_NAME || 'localhost'

//  Config template engine 
viewEngineConfig(app);

// Config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// Khai bao route
app.use('/v1', webRoutes)


// app.get('/', (req, res) => {
//     res.send('Hello Express  & using nodemon')
// })

// app.get('/abc', (req, res) => {
//     res.send('Just for testing multiple routes (/abc) ')
// })

// app.get('/test-html', (req, res) => {
//     res.send('<h1>Test response  with html tag</h1>')
// })

// // Route dung de test ejs template engine
// app.get('/test-ejs', (req, res) => {
//     // res.send('<h1>Test response  with html tag</h1>')
//     // Khong dung res.send nua ma chuyen sang res.render va truyen ten cua template can render vao
//     res.render('sample.ejs')
// })



// Test connection 
// create the connection to database
// const connection = mysql.createConnection({
//     host: 'localhost',
//     port: 3307,
//     user: 'root',
//     password: '123456',
//     database: 'hoidanit'
// });

// simple query
connection.query(
    'SELECT * FROM `Users` WHERE `id` >= 1',
    function (err, results, fields) {
        console.log(" >>>> results = ", results); // results contains rows returned by server
        console.log(">>> fields =", fields); // fields contains extra meta data about results, if available
    }
);

app.listen(port, host_name, () => {
    console.log(`Example app listent on port ${port}`)
})
