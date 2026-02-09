const path = require('path');

const filePath = path.join(__dirname, 'data.txt');
console.log("File Path:", filePath);

console.log("Base Name:", path.basename(filePath));
console.log("Extension Name:", path.extname(filePath));
console.log("Directory Name:", path.dirname(filePath));