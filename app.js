const express = require('express');
const app = express();
const path = require('path');

app.listen(process.env.PORT || 3000, function () {
    console.log('Corriendo')
});

const htmlPath = path.resolve(__dirname, './public/views/home.html');
app.get('/', (req, res) => {
    res.sendFile(htmlPath);
});

const registerPath = path.resolve(__dirname, './public/views/register.html');
app.get('/register', (req, res) => {
    res.sendFile(registerPath);
});

const loginPath = path.resolve(__dirname, './public/views/login.html');
app.get('/login', (req, res) => {
    res.sendFile(loginPath);
});

const publicPath = path.resolve(__dirname, './public')
app.use(express.static(publicPath));