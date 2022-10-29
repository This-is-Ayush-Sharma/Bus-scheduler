const express = require('express');
const app = express();

// controllers
const authController = require('../controllers/auth.controller');


app.get('/health', (req, res) => {
    res.send("APP IS HEALTHY AND RUNNING...");
});


//login and register routes
app.post('/login', authController.login);
app.post('/register', authController.register);


module.exports = app;