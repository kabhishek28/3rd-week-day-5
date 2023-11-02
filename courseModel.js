const mongoose = require("mongoose")
const courseSchema = new mongoose.Schema({

    CourseName: {
        type: String,
        required: true,
    },
    CourseCode: {
        type: String,
        required: true,
        unique: true,
    },
    Department: {
        type: String, 
        required: true,
    },
    Credits: {
        type: Number,
        required: true,
    },
    Fees:{
        type:Number,
        required:true,
    },

 }, 
 { timestamps: true }
);

module.exports = mongoose.model("Course", courseSchema);