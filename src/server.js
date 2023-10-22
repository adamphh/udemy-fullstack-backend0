// Muốn dùng .env  thì bắt buộc phải khai báo dòng này
require('dotenv').config()
const express = require('express')  //  commonjs
//  import express  from 'express' // es modules (can co babel moi chay duoc)

const viewEngineConfig = require('./config/viewEngineConfig');
const webRoutes = require('./routes/web');

console.log(" >>> check env", process.env.HOST_NAME)

const app = express()   // app express
const port = process.env.PORT || 8080       // port
const host_name = process.env.HOST_NAME || 'localhost'

//  Config template engine 
viewEngineConfig(app);

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




app.listen(port, host_name, () => {
    console.log(`Example app listent on port ${port}`)
})
