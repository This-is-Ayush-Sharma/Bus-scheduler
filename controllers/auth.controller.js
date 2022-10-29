const User = require('../models/user');
const crypt = require('../utils/crypt');
const jwtGen = require('../utils/JwtTokenGen');

exports.login = async(req,res)=>{
    console.log(req.body);
    const { email, password } = req.body;
    try{
        const user = await User.findOne({email:email});
        console.log(user);
        if(!user)
        {
            return res.status(404).json({
                message:"User Doesn't exist."
            });
        }
        else if(user.status === 'INACTIVE')
        {
            return res.status(400).json({
                message:"User Account is not active."
            });
        }
        else
        {
            if(await crypt.decode(password,user.password))
            {
                const token = await jwtGen.genJwt({
                    name: user.name,
                    email: user.email,
                    year: user.year,
                    rollno: user.rollno,
                    usrtype: user.usrtype
                });
                return res.status(200).json({
                    message:"Login success!",
                    token,
                    usrtype: user.usrtype
                });
            }
            else
            {
                return res.status(401).json({
                    message:"Wrong password!"
                });
            }
        }
    }
    catch(error)
    {
        console.log(error);
        return res.status(500).json({
            message:"Server error!"
        });
    }
};

exports.register = async(req,res)=>{
    console.log(req.body);
    let { name, number, email, password, usrtype } = req.body;
    try{
        password = await crypt.encode(password);
        console.log(password);
        await User.create({
            name,
            email,
            password,
            number,
            usrtype
        })
        return res.status(200).json({
            message:"Register success!"
        });
    }
    catch(error)
    {
        // console.log(error);
        console.log("some error occured...");
        if(error.code ===  11000)
        {
            return res.status(400).json({
                message:"Email already Exist!"
            });
        }
    }
};