const http = require('http');
const fs = require('fs');

// const server = http.createServer((req, res) => {
//     fs.readFile('data.txt', 'utf8', (err, data) => {
//         if (err) {
//             res.statusCode = 500;
//             res.end("Error reading file");
//             return;
//         }
//         res.statusCode = 200;
//         res.end(data);
//     });
// });
// const http = require("http");
// const fs = require("fs");

const server = http.createServer((req, res) => {

  if (req.url === "/read-employee") {

    fs.readFile("employeeData.txt", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("File not found");
        return;
      }

      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(data);
    });

  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Route not found");
  }
});

const PORT = 8000;
server.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}`);
});