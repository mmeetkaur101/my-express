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

// Update a student by ID
router.put('/:id', async (req, res) => {
    // Implement update logic here
});

// Delete a student by ID
router.delete('/:id', async (req, res) => {
    // Implement delete logic here
});

module.exports = router;
