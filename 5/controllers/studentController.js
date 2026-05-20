const { ObjectId } = require('mongodb');
const { getDB } = require('../db_connection');

// POST - Add Student
async function addStudent(req, res) {
    try {
        const db = getDB();
        const result = await db.collection("students").insertMany(req.body);
        res.status(201).json({
            message: "Student Added Successfully",
            data: result
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// GET - Get All Students
async function getStudents(req, res) {
    try {
        const db = getDB();
        const students = await db.collection("students").find().toArray();
        res.json(students);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// PATCH - Update Student
async function updateStudent(req, res) {
    try {
        
        const db = getDB();
        const id = req.params.id;

        const result = await db.collection("students").updateOne(
            { _id: new ObjectId(id) },
            { $set: req.body }
        );

        res.json({
            message: "Student Updated Successfully",
            result
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// DELETE - Delete Student
async function deleteStudent(req, res) {
    try {
        const db = getDB();
        const id = req.params.id;

        const result = await db.collection("students").deleteOne({
            _id: new ObjectId(id)
        });

        res.json({
            message: "Student Deleted Successfully",
            result
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// GET ONE STUDENT
async function getOneStudent(req, res) {
    try {
        const db = getDB();
        const id = req.params.id;

        const student = await db.collection("students").findOne({
            _id: new ObjectId(id)
        });

        if (!student) {
            return res.status(404).json({ message: "Student Not Found" });
        }

        res.json(student);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// UPDATE MANY STUDENTS
async function updateManyStudents(req, res) {
    try {
        const db = getDB();

        // Example: update by condition
        const result = await db.collection("students").updateMany(
            req.body.filter,   // condition
            { $set: req.body.update }  // fields to update
        );

        res.json({
            message: "Students Updated Successfully",
            result
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// DELETE MANY STUDENTS (Improved)
async function deleteManyStudents(req, res) {
    try {
        const db = getDB();

        const result = await db.collection("students").deleteMany(
            req.body.filter || {}
        );

        res.json({
            message: "Students Deleted Successfully",
            result
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}



module.exports = {
    addStudent,
    getStudents,
    getOneStudent,
    updateStudent,
    updateManyStudents,
    deleteStudent,
    deleteManyStudents
};