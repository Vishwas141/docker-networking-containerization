const mongoose = require('mongoose');
const Student = require("../model/StudentModel");




exports.createStudent = async(req, res) => { 
    try
    {
        const { name, email } = req.body;
        
        const student = await Student.create({ name, email });

        return res.status(201).json({
            message: "Student created",
            student
        });

    }
    catch(err)
    {
        return res.status(500).json({
            message: err.message
        });
        
    }
}

exports.getAllStudents = async (req, res) => { 
    try
    {
        const students = await Student.find();

        return res.status(200).json({
            message: "All students",
            data:students
        });
    }
    catch(err)
    {
        return res.status(500).json({
            message: err.message
        });
    }
}
