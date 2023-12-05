let day = ""
let fileHandler = require('../lib/fileHandler.js')
let input = fileHandler.getInputArr(`../inputs/input${day}.txt`)

let process = function(el){

}

let ans = ""
let i = 0

for(line of input){
    let j = 0
    for(el of line){
        process(el)
        j++
    }
    i++
}

console.log(ans)