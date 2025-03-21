const fs = require("fs");

const first = fs.readFileSync("./read/file1.txt", "utf8");
const second = fs.readFileSync("file2.txt", "utf8");

console.log(first);
console.log(second);

fs.writeFileSync("./read/file3.txt", `This is both ${first} and ${second}`, {flag: 'a'});
const third = fs.readFileSync("./read/file3.txt", "utf8");
console.log(third);

// fs.readFile("./read/file1.txt", "utf8", function(err, result) {
//     if (err) throw err;
//     console.log(result);
// });
// fs.readFile("file2.txt", "utf8", function(err, result) {
//     if (err) throw err;
//     console.log(result);
// });
// const second = fs.readFileSync("file2.txt", "utf8");

// console.log(first);
// console.log(second);
