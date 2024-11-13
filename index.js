const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  const superhero = {
    firstName: "Bruce",
    lastName: "Wayne",
  };

  res.writeHead(200, { "Content-type": "text/html" });

  const name = "Jaimin";
  // fs.createReadStream(__dirname + "/index.html").pipe(res);
  let html = fs.readFileSync("./index.html", "utf-8");
  html = html.replace("{{name}}", name);
  res.end(html);
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
