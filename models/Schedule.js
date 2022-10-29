const mongoose = require('mongoose');

const Schedule = mongoose.Schema({
    BusNumber:{
        type:String,
        required:true
    },
    Destination:{
        type: String,
        required:true
    },
    Depature:{
        type: String,
        required:true
    },
    Stoppage:{
        type: [String],
        required:true
    },
});

module.exports = mongoose.model("Schedule",Schedule);