// Bringing in needed modules for assignment
const http = require("http");
const fs = require("fs");

// Create the HTTP server
const server = http.createServer((request, response) => {
  // Grab URL from request
  const url = request.url;

  //Implement routing logic using switch
  switch (url) {
    case "/":
      // Handle root route
      response.writeHead(200, { "Content-Type": "text/plain" });
      response.end("Welcome to homepage");
      console.log("Homepage accessed");
      break;
    case "/about":
      // Handle about route
      response.writeHead(200, { "Content-Type": "text/plain" });
      response.end("Welcome to about page");
      console.log("About page accessed");
      break;
    case "/contact":
      // Handle contact route
      response.writeHead(200, { "Content-Type": "text/plain" });
      response.end("Welcome to contact page");
      console.log("Contact page accessed");
      break;
    case "/products":
      // Handle products route
      response.writeHead(200, { "Content-Type": "text/plain" });
      response.end("Welcome to products page!");
      console.log("Products page accessed");
      break;
    case "subscribe":
      // Handle subscribe route
      response.writeHead(200, { "Content-Type": "text/plain" });
      response.end("Welcome to the subscribe page");
      console.log("Subscribe page accessed");
      break;
  }
});

// Start server and listen on port
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
