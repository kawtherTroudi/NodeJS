const fs = require('fs')  
let doc = process.argv[2]  
  
fs.readFile(doc, (err, contents) =>{  
  let count = contents.toString().split('\n').length - 1  
  console.log(count)  
})
