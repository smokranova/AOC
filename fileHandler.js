var fs = require('fs'),
path = require('path')    

let getInput = function(name){
   let filePath = path.join(__dirname, name);
   return fs.readFileSync(filePath, {encoding: 'utf-8'});
}

let getInputArr = function(name){
   let input = getInput(name)
   return input.split("\n");
}

module.exports = { getInput, getInputArr };