exports.isDriver = async(req,res,next)=>{
    const user = req.user;
    console.log(user);
    if(user.usrtype === "Driver")
    {
        next();
    }
    else{
        res.status(401).json({
            message:"You are not a Driver Buzz off! - (Thank God)"
        })
    }
};