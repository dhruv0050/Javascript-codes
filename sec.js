//File system operations

const fs = require('fs');
// operation1] witefile : fs.writeFile(file, data[, options-->optional], callback)

fs.writeFile("backend1.txt" , "Hello node world", function(err){
    if(err){
        console.log(err)
    }
    else(
        console.log("Writting Done")
    )
})

fs.appendFile("backend1.txt","\nLearning Node.js,npm with file system",function(err){
    if(err) console.log(err);
    else console.log("Appended")
})