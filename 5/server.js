// how we can create a server with the help of fs module
// response and request ---> event listening
// everytime we generate request , we generate an http request

const http = require("http"); // to create a server and sending request
const fs = require("fs"); // to read the file

// create http server
const server = http.createServer((req, res) => {
  // read the text file
  fs.readFile("data.txt", "utf-8", (err, data) => {
    // err and data are callback functionalities , so that we can handle asynchronously
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" }); 
      // jo hum request bhej rahe hai , uska header generate karne ke liye ham "res.writeHead" use kar rahe hai
      // 200 - success
      // 400 - error
      // 404
      // 500- server error
      // there are multiple such codes
      res.end("Error reading file");
    } else {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(data);
    }
  });
});

// start server
// server.listen() ---> important to start a server

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

// there are multiple (mainly 4) types of requests  ,but we are not using it here.

// request are made any tools and response comes at the frontend
// we can use "postman" as well
// we can use thunder clinet as well