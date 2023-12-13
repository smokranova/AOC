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

let rotateMatrix = function(matrix) {
   const rows = matrix.length;
   const cols = matrix[0].length;
 
   const transposedMatrix = new Array(cols)
     .fill(0)
     .map(() => new Array(rows).fill(0));
 
   for (let i = 0; i < rows; i++) {
     for (let j = 0; j < cols; j++) {
       transposedMatrix[j][i] = matrix[i][j];
     }
   }
 
   const rotatedMatrix = transposedMatrix.map(row => row.reverse());
 
   return rotatedMatrix;
 }

module.exports = { getInput, getInputArr, rotateMatrix };