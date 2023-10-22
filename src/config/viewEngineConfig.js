const path = require('path');
const express = require('express');

const viewEngineConfig = (app) => {
    console.log(">>> check __dirname: ", path.join(__dirname, '../views'));
    console.log(">>> check __dirname file: ", path.join('./src', 'views'));

    // Chi  dinh thu muc se chua cac file template
    app.set('views', path.join('./src', 'views'))
    app.set('views', path.join(__dirname, '../views'))
    app.set('view engine', 'ejs')
    // Config static files
    app.use(express.static(path.join('./src', 'public')))
}

module.exports = viewEngineConfig;