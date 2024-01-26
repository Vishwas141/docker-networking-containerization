const express = require("express");

const router = express.Router();


const { createStudent, getAllStudents } = require("../controller/StudentController");

router.post("/createstudent", createStudent);
router.get("/getstudent", getAllStudents);

module.exports = router;


