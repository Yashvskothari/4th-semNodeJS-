const express = require('express');
const router = express.Router();

const {
    addStudent,
    getStudents,
    getOneStudent,
    updateStudent,
    updateManyStudents,
    deleteStudent,
    deleteManyStudents
} = require('../controllers/studentController');

// CREATE
router.post('/', addStudent);

// READ ALL
router.get('/', getStudents);

// READ ONE
router.get('/:id', getOneStudent);

// UPDATE ONE
router.patch('/:id', updateStudent);

// UPDATE MANY
router.patch('/', updateManyStudents);

// DELETE ONE
router.delete('/:id', deleteStudent);

// DELETE MANY
router.delete('/', deleteManyStudents);

module.exports = router;