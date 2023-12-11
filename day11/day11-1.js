let day = "11"
let fileHandler = require('../lib/fileHandler.js')
let input = fileHandler.getInputArr(`../inputs/input${day}.txt`)
input = input.map(line => line.trim().split(""))

class Galaxy {
    constructor(x, y, index){
        this.x=x
        this.y=y
        this.index = index
    }
}

let expandAfter = function(galaxies, input) {
    let rows = []
    let cols = []    

    for (let i = 0; i < input.length; i++) {
        if (!input[i].includes("#")) {
            rows.push(i);
        }
    }
    
    for (let j = 0; j < input[0].length; j++){
        if (!input.map((e) => e[j]).includes("#")) {
            cols.push(j);
        }
    }
    let expand = 1000000-1;
    const dist = [];
    for (let i = 0; i < galaxies.length; i++) {
      dist[i] = [];
      for (let j = i; j < galaxies.length; j++) {
        dist[i][j] =
          Math.abs(galaxies[i].x - galaxies[j].x) +
          Math.abs(galaxies[i].y - galaxies[j].y) +
          expand * cols.filter(
              (e) =>
                e > Math.min(galaxies[i].y, galaxies[j].y) &&
                e < Math.max(galaxies[i].y, galaxies[j].y)
            ).length + expand * rows.filter((e) => e > galaxies[i].x && e < galaxies[j].x).length;
      }
    }
    return dist
      .map((e) => e.reduce((acc, cur) => acc + cur, 0))
      .reduce((acc, cur) => acc + cur, 0);
}

function rotateMatrix(matrix) {
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

 
   

// ...#......
// .......#..
// #.........
// ..........
// ......#...
// .#........
// .........#
// ..........
// .......#..
// #...#.....

let ans = ""
let i = 0

let galaxies = []
let index = 0

let expand = function(grid){
    let output = []
    for(line of grid){
        output.push(line)
        if(line.every(x => x == ".")){
            output.push(line)
        }
    }
    return output
}
// let expanded = expand(input)
// expanded = expand(rotateMatrix(expanded))
// expanded = rotateMatrix(expanded)
// expanded = rotateMatrix(expanded)
// expanded = rotateMatrix(expanded)

let expanded = input

for(line of expanded){
    let j = 0
    for(el of line){
        if(el === "#"){
            galaxies.push(new Galaxy(i, j, index))
            index ++
        }
        j++
    }
    i++
}


//    x x x x x x
//  y 0 1 2 3 4 5 
//  y 0 1 2 3 4 5
//  y 0 1 2 3 4 5
//  y 0 1 2 3 4 5

let findPath = function(g1, g2){
    let path = Math.abs(g1.x - g2.x) + Math.abs(g1.y - g2.y);
    //console.log(g1.index, g2.index, path)
    return path
} 
let res = 0


for(i = 0; i < galaxies.length; i++){
    let j = i + 1
    for(; j < galaxies.length; j++){
        res += findPath(galaxies[i], galaxies[j])
    }
}

//374
console.log(expandAfter(galaxies, input))
console.log(613686987427)
console.log(res)
