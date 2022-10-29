const mongoose  = require('mongoose');

const user = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    number:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true,
        default:"ACTIVE"
    },
    password:{
        type: String,
        required: true
    },
    usrtype:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model("userData",user);