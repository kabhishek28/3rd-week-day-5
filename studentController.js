const StudentModel = require("../Models/studentModels.js");
const validation = require("../Controllers/validator");

let createStudent = async (req, res) => {
  try {
    let data = req.body;
    let {Name,USN,Gender,Email,Mobile,Password} = data;
   
    //Name Validation
    if(!validation.isValid(Name)){
      return res.status(400).send({status:false,msg:"Please Enter your Name"})
    }
    //USN validaton
    if(!validation.isValid(USN)){
      return res.status(400).send({status:false,msg:"Please Enter your USN"})
    }
    //Gender 
    if(!validation.isValid(Gender)){
      return res.status(400).send({status:false,msg:"Please Enter your Gender"})
    }
    //Mobile
    if(!validation.isValid(Mobile)){
      return res.status(400).send({status:false,msg:"Please Enter your Mobile number"})
    }
    //Password
    if(!validation.isValid(Name)){
      return res.status(400).send({status:false,msg:"Please Enter your Name"})
    }
    
     let registerStudent = await StudentModel.create(data);
    return res.status(201).send({
      status: true,
      msg: "Student Data Registered successfully",
      data: registerStudent,
    });
  } catch (error) {
    return res
      .status(500)
      .send({ status: false, msg: "Internal Server Error" });
  }
};

module.exports = { createStudent };