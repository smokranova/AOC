let fileHandler = require('../lib/fileHandler.js')
let input = fileHandler.getInputArr('../inputs/input3.txt')
//549908

// 467..114..
// ...*......
// ..35..633.
// ......#...
// 617*......
// .....+.58.
// ..592.....
// ......755.
// ...$.*....
// .664.598..

let checkAround = function(i,j){
    let lineLen = input[i].length
    let endLine = input.length
    for(ii = i-1; ii <= i+1; ii++){
        for(jj = j-1; jj <= j+1; jj++){
            if(jj > 0 && jj < endLine && ii > 0 && ii < lineLen){
                if(isSpecial(input[ii][jj])){
                    console.log("special", input[ii][jj], ii, jj)
                    return true
                }
            }
        }
    }
}

let isSpecial = function(it){
    return !isNumber(it) && it !== "."
}

let isNumber = function(it){
    return parseInt(it).toString() == it
}

let i = 0;
let sum = 0;
let num = "";
let add = false

for(line of input){
    let j = 0;
    for(char of line){
        if(isNumber(char)){
            num += char
            if (checkAround(i, j)){
                add = true
            }
        } else {
            sum += isNumber(num) && add ? parseInt(num) : 0;
           // console.log(isNumber(num) && add ? num : "")
            num = ""
            add = false
        }
        j++
    }
    i++
}
console.log(sum)
