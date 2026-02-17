const { ObjectId } = require("mongodb");
const { getDB } = require("../db_connection");

// POST - Add Student
async function addStudent(req, res) {
  try {
    const db = getDB();
    const result = await db.collection("students").insertOne(req.body);
    res.status(201).json({
      message: "Student Added Successfully",
      data: result,
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

    const result = await db
      .collection("students")
      .updateOne({ _id: new ObjectId(id) }, { $set: req.body });

    res.json({
      message: "Student Updated Successfully",
      result,
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
      _id: new ObjectId(id),
    });

    res.json({
      message: "Student Deleted Successfully",
      result,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  addStudent,
  getStudents,
  updateStudent,
  deleteStudent,
};
