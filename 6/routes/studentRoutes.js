const express = require("express");
const router = express.Router();

const {
  addStudent,
  getStudents,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");

router.post("/", addStudent);
router.get("/", getStudents);
router.patch("/:id", updateStudent);
router.delete("/:id", deleteStudent);

module.exports = router;
