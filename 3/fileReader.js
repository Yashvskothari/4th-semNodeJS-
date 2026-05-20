// use fs module , read file , and execute it using asynchronous
// fs comes with node by default , be sometimes , we need to import it from npm as well

// import the built-in file system module
const fs = require("fs");

const fileName = "studentData.txt";

console.log("--------------Started----------------");

//reading the file asunchrounously

//(err and data) ====> callback functions
//file reading is an asynchronous operation
fs.readFile(fileName, "utf8", (err, data) => {
  if (err) {
    console.log("----Error Detected");
    if (err.code === "ENOENT") {
      //Node.js is trying to access a file or folder that does not exist at the given path.
      //Error NO ENTry (or No such file or directory)
      console.error(`Status : 404. This file ${fileName} does not exists.`);
    }
    else{
      console.error("An unexpected error occured : " , err.message)
    }
    return; // exit the callback
  }
  console.log("---File Read Successfully---");
  console.log("Content: ", data);
});

console.log("---Program continuing(Non-blocking)---");
console.log("The event loop is still running while the file is being read...");




