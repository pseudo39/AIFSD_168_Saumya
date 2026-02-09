const fs = require('fs');

// try{
//     const data = fs.readFileSync('data.txt', 'utf8');
//     console.log(data);
// }catch(error){
//     console.log(error.message);
// }
// console.log("Request 2nd data from files");
// console.log("Request 3rd data from files");

// fs.writeFile("data.txt","This is sample data",(err)=>{
// if(err){
//     console.log("Error writing file:", err.message);
//     return;
// }console.log("File written successfully");
// })

fs.appendFile("data.txt","\nThis is appended data",(err)=>{
    if(err){
        console.log("Error appending file:", err.message);
        return;
    }
    console.log("File appended successfully");
});