const http = require("http");
const fs = require("fs");

const homePage = fs.readFileSync("./navbar.html");
const homeStyles = fs.readFileSync("./navbar.css");
const homeJs = fs.readFileSync("./navbar.js");
const logo = fs.readFileSync("./logo.svg");
const index = fs.readFileSync("./home.html");
const indexStyles = fs.readFileSync("./home.css");
const aboutPage = fs.readFileSync("./about.html");
const aboutPageStyles = fs.readFileSync("./about.css");
const team1 = fs.readFileSync("./team1.png");
const team2 = fs.readFileSync("./team2.png");
const team3 = fs.readFileSync("./team3.png");
const contactPage = fs.readFileSync("./contact.html");
const contactPageStyles = fs.readFileSync("./contact.css");
const bgImg = fs.readFileSync("./bg-img.webp");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(homePage);
    res.end();
  } else if (url === "/navbar.css") {
    res.writeHead(200, { "Content-Type": "text/css" });
    res.write(homeStyles);
    res.end();
  } else if (url === "/navbar.js") {
    res.writeHead(200, { "Content-Type": "text/js" });
    res.write(homeJs);
    res.end();
  } else if (url === "/logo.svg") {
    res.writeHead(200, { "Content-Type": "image/svg+xml" });
    res.write(logo);
    res.end();
  } else if (url === "/index") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(index);
    res.end();
  } else if (url === "/home.css") {
    res.writeHead(200, { "Content-Type": "text/css" });
    res.write(indexStyles);
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(aboutPage);
    res.end();
  } else if (url === "/about.css") {
    res.writeHead(200, { "Content-Type": "text/css" });
    res.write(aboutPageStyles);
    res.end();
  } else if (url === "/team1.png") {
    res.writeHead(200, { "Content-Type": "image/png" });
    res.write(team1);
    res.end();
  } else if (url === "/team2.png") {
    res.writeHead(200, { "Content-Type": "image/png" });
    res.write(team2);
    res.end();
  } else if (url === "/team3.png") {
    res.writeHead(200, { "Content-Type": "image/png" });
    res.write(team3);
    res.end();
  } else if (url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(contactPage);
    res.end();
  } else if (url === "/contact.css") {
    res.writeHead(200, { "Content-Type": "text/css" });
    res.write(contactPageStyles);
    res.end();
  } else if (url === "/bg-img.webp") {
    res.writeHead(200, { "Content-Type": "image/webp" });
    res.write(bgImg);
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>Error Page</h1>");
  }
});

port = 5000;

server.listen(port, () => {
  console.log(`server is running on port ${port} `);
});
