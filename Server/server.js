const http = require("http");
const fs = require("fs");
const path = require("path");

// Create the HTTP server
const server = http.createServer((request, response) => {
  // Grab URL from request
  const url = request.url;

  // Map file path
  let filePath;

  // Adjust handling for the root route ("/")
  if (url === "/") {
    filePath = path.join(__dirname, "views", "index.html");
  } else {
    filePath = path.join(__dirname, "views", url.slice(1) + ".html");
  }

  //Implement routing logic using switch
  switch (url) {
    case "/":
    case "/about":
    case "/contact":
    case "/products":
    case "/subscribe":
      // Read the file
      fs.readFile(filePath, (err, data) => {
        if (err) {
          // If file doesn't exist or there's an error reading it, send 404
          response.writeHead(404, { "Content-Type": "text/plain" });
          response.end("404 Not Found");
          console.log("Page not found");
        } else {
          // If file is successfully read, send it as response
          response.writeHead(200, { "Content-Type": "text/html" });
          response.end(data);
          console.log(`${url} page accessed`);
        }
      });
      break;

    default:
      // If the URL is not found, send 404
      response.writeHead(404, { "Content-Type": "text/plain" });
      response.end("404 Not Found");
      console.log("Page not found");
      break;
  }
});

// Start server and listen on port
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
