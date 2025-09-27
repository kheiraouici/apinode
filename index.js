const http = require("http");
const fs = require("fs");
const port = 3250;

http.createServer((req, res) => {
// 🔑 Autoriser toutes les origines (CORS)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

 if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.url === "/about") {
    fs.readFile("about.json", "utf8", (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ error: "Impossible de lire about.json" }));
      } else {
        res.setHeader("Content-Type", "application/json");
        res.end(data);
      }
    });
  } else if (req.url === "/") {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ message: "Bienvenue sur l’API" }));
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "URL non définie" }));
  }
}).listen(port, () => console.log("Serveur en écoute sur le port", port));

