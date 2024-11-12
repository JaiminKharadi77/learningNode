const http = require("node:http");

const server = http.createServer((req, res) => {
  const superhero = {
    firstName: "Bruce",
    lastName: "Wayne",
  };

  res.writeHead(200, { "Content-type": "application/json" });
  res.end(JSON.stringify(superhero));
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
