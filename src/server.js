const express = require('express')  //  commonjs
//  import express  from 'express' // es modules (can co babel moi chay duoc)
const path = require('path')

const app = express()   // app express
const port = 8080       // port

//  Config template engine 
// Chi  dinh thu muc se chua cac file template
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Khai bao route
app.get('/', (req, res) => {
    res.send('Hello Express')
})

app.get('/abc', (req, res) => {
    res.send('Just for testing multiple routes (/abc) ')
})

app.get('/test-html', (req, res) => {
    res.send('<h1>Test response  with html tag</h1>')
})

// Route dung de test ejs template engine
app.get('/test-ejs', (req, res) => {
    // res.send('<h1>Test response  with html tag</h1>')
    // Khong dung res.send nua ma chuyen sang res.render va truyen ten cua template can render vao
    res.render('sample.ejs')
})


app.listen(port, () => {
    console.log(`Example app listent on port ${port}`)
})