const express=require("express")
const router=express.Router()

const StudentController=require("../Controllers/studentControllers")

router.post("/register",StudentController.createStudent);

// const CourseController=require("../Controllers/courseController")
// router.post("/course",StudentController.createStudent);


module.exports=router;

// const express = require("express");
// const router = express.Router();
// const CourseController= require("../Controllers/courseController.js");

// router.post("/Courseregister",CourseController.createCourse);

// module.exports= router;