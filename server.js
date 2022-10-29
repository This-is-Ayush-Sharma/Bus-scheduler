const express = require('express');

const app  = express();

require('dotenv').config();
const port = process.env.PORT;
const routes = require('./routes/routes');
const dbConnection = require('./config/db');
const cors = require('cors');


app.use(express.json());
app.use(cors())
app.use('/',routes);

dbConnection.connectDb();  // making connection with the database


app.listen(port,()=>{
    console.log(`The server is up and listening on port ${port}`);
});