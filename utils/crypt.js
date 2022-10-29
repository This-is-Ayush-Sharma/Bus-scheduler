const crypt = require('bcrypt');

exports.encode = async (password)=>{
    return crypt.hash(password,1);
};

exports.decode = async (userPassword,passwordHash)=>{
    return crypt.compare(userPassword,passwordHash);
};