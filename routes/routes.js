const express = require('express');
const app = express();


//middleware
const isAuth = require('../middlewares/isAuthenticated');
const isDriver = require('../middlewares/isDriver');

// controllers
const authController = require('../controllers/auth.controller');
const ScheduleController = require('../controllers/schedule.controller');

app.get('/health', (req, res) => {
    res.send("APP IS HEALTHY AND RUNNING...");
});


//login and register routes
app.post('/login', authController.login);
app.post('/register', authController.register);

// public api
app.post('/ShowSchedule', isAuth.isAuth, ScheduleController.showData);

// Driver api
app.post('/AddSchedule',isAuth.isAuth, isDriver.isDriver, ScheduleController.AddData);
app.post('/DeleteSchedule', isAuth.isAuth, isDriver.isDriver, ScheduleController.DeleteData);


module.exports = app;