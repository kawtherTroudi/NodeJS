const fs = require('fs')
let doc = fs.readFileSync(process.argv[2])
let count = doc.toString().split('\n').length - 1
console.log(count)