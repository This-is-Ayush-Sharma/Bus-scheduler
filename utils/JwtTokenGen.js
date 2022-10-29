const jwt = require('jsonwebtoken');

exports.genJwt = async (data)=>{
    return jwt.sign(data,process.env.JWT_SECRET);
};