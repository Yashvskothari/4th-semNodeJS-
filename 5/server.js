// Import required core modules
const http = require("http"); // Used to create an HTTP server
const fs = require("fs");     // Used to interact with the file system (read/write files)

// Create an HTTP server
const server = http.createServer((req, res) => {

  // Read the contents of "data.txt" asynchronously
  fs.readFile("data.txt", "utf-8", (err, data) => {

    // If an error occurs while reading the file
    if (err) {
      // Send HTTP status code 500 (Internal Server Error)
      res.writeHead(500, { "Content-Type": "text/plain" });

      // End the response with an error message
      res.end("Error reading file");
    } 
    else {
      // Send HTTP status code 200 (OK / Success)
      res.writeHead(200, { "Content-Type": "text/plain" });

      // Send the file data as the response
      res.end(data);
    }
  });
});

// Start the server and listen on port 3000
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});


/*
IMPORTANT NOTES:

1. req (Request):
   Represents the incoming HTTP request from the client.
   Example: Browser, Postman, Thunder Client, mobile app, etc.

2. res (Response):
   Used to send a response back to the client.

3. readFile():
   Works asynchronously, meaning it does not block the server
   while the file is being read.

4. writeHead():
   Sends the HTTP status code and response headers.
   Common status codes:
   - 200 → Success
   - 404 → Resource not found
   - 400 → Bad request
   - 500 → Internal server error

5. server.listen():
   Required to start the server and make it available
   to accept client requests.

6. HTTP Request Methods:
   The most commonly used methods are:
   - GET    → Retrieve data
   - POST   → Send new data
   - PUT    → Update existing data
   - DELETE → Remove data

7. Testing APIs:
   Tools like Postman or Thunder Client can be used
   to send HTTP requests and inspect server responses.
*/
