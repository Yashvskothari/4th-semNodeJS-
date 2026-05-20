const express = require("express");
const app = express();
app.use(express.json());
let student = [
  { id: 101, name: "prakhar", section: "SE" },
  { id: 102, name: "atul", section: "SG" },
];

//GET
app.get("/student", (req, res) => {
  res.json(student);
});

//post
app.post("/student", (req, res) => {
  student.push(req.body);
  res.json({ message: "Student added successfully" });
});

// delete

app.delete("/student/:id", (req, res) => {
  student = student.filter((s) => s.id != req.params.id);
  res.json({ message: "Student deleted successfully", data: student });
});

//put
app.put("/student/:id", (req, res) => {
  let s = student.find((s) => s.id == req.params.id);
  if (!s) {
    return res.send("student not found");
  }

  s.id = req.body.id;
  s.name = req.body.name;
  s.section = req.body.section;

  res.json({ message: "student updated successfully", data: s });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
