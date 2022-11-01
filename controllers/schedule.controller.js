const User = require('../models/user');
const Schedule = require('../models/Schedule');


exports.AddData = async(req,res)=>{
    const { BusNumber, Destination, Depature, Stoppage } = req.body;
    try{
        await Schedule.create({
            BusNumber,
            Destination,
            Depature,
            Stoppage
        });
        return res.status(200).json({
            message:"data added!",
        })
    }
    catch(error)
    {
        return res.status(500).json({
            message: "Server error!"
        })
    }
}

exports.showData = async(req,res)=>{
    try{
        const data = await Schedule.find();
        console.log(data);
        res.status(200).json({
            message: "Data fetched successfully",
            data
        })
    }
    catch(error){
        res.status(500).json({
            message: "Server error!"
        })
    }
};

exports.DeleteData = async(req,res)=>{
    const { Depature, BusNumber } = req.body;
    try{
        await Schedule.deleteOne({Depature: Depature,BusNumber: BusNumber});
        res.status(200).json({
            message: "Record Deleted!"
        })
    }
    catch(error){
        res.status(500).json({
            message: "Server error!"
        })
    }
}