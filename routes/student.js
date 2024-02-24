// routes/students.js
const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// Create a new student
router.post('/', async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.status(201).send(student);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Read all students
router.get('/', async (req, res) => {
    try {
        const students = await Student.find();
        res.render('student/index', { students });
    } catch (error) {
        res.status(500).send(error);
    }
});


router.put('/:id', async (req, res) => {
    try {
        const studentId = req.params.id;
        const updatedData = req.body;
        const updatedStudent = await Student.findByIdAndUpdate(studentId, updatedData, { new: true });
        if (!updatedStudent) {
            return res.status(404).send({ message: "Student Doen't Exist" });
        }
        res.status(200).send(updatedStudent);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const studentId = req.params.id;
        const deletedStudent = await Student.findByIdAndDelete(studentId);
        if (!deletedStudent) {
            return res.status(404).send({ message: "Student Doen't Exist" });
        }
        res.status(200).send({ message: "Student Successfully" });
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;
