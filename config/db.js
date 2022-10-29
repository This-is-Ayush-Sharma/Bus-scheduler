const mongoose = require('mongoose');

exports.connectDb = ()=>{
    console.log(`${process.env.DB_URI}`);
    mongoose.connect(`${process.env.DB_URI}`,()=>{
        console.log("Your are connected to the database");
    })
};