var fs = require('fs'),
path = require('path')    

let getInput = function(name){
   let filePath = path.join(__dirname, name);
   return fs.readFileSync(filePath, {encoding: 'utf-8'});
}

module.exports = { getInput };