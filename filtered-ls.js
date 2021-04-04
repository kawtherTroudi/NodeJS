const fs = require("fs");
var path = require("path");

let folder = process.argv[2];

fs.readdir(folder, (err, files) =>{
  if (err) return console.error(err);
  files.forEach((file) =>{
    if (path.extname(file) === '.' + process.argv[3]) {
      console.log(file);
    }
  });
});