// we never write logic in server.js for better maintainability
const express = require("express");
const { connectDB } = require("./db_connection");
const studentRoutes = require("./routes/studentRoutes");

const app = express();
app.use(express.json());

// Connect Database
connectDB();

// Routes
app.use("/students", studentRoutes);

// Start Server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
