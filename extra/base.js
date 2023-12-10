let day = ""
let fileHandler = require('../lib/fileHandler.js')
let input = fileHandler.getInputArr(`../inputs/input${day}.txt`)

let process = function(el){

}

let ans = ""
let i = 0

let output = input

for(line of input){
    let j = 0
    for(el of line){
        output[el[0].y][el[0].x] = "X"
        j++
    }
    i++
}

console.log(ans)