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
let iLen = input[0].length
let jLen = input.length
let num = ""
let sum = 0
let add = false

let createGrid = function(){
    let arr = []
    for(let i = 0; i < iLen; i++){
        let arrIn = []
        for(let j = 0; j < jLen; j++){
            arrIn.push(0)
        }
        arr.push(arrIn)
    }

    let i = 0
    for(line of input){
        let j = 0;
        for(char of line){
            if(Number.isInteger(parseInt(char))){
                num += char
            } else {
                let len = num.length
                for(y = j - 1; y >= j - len; y --){
                    arr[i][y] = Number.isInteger(parseInt(num)) ? parseInt(num) : ".";
                }
                num = ""
                add = false
            }
            if(arr[i][j] === 0 && !Number.isInteger(parseInt(char))){
                arr[i][j] = char
            }
            j++
        }
        i++
    }
    return arr;
}

let isSpecial = function(it){
    return it !== "." && !Number.isInteger(parseInt(it));
}

let arr = createGrid()

let checkNeighbours = function(i, j){
    let height = arr.length
    let width = arr[i].length
    for(let x = i-1; x <= i+1; x++){
        for(let y = j-1; y <= j+1; y++){
            if(x >= 0 && x < height && y >= 0 && y < width){
                if(isSpecial(arr[x][y])){
                    return true
                }
            }
        }
    }
    return false
}

let numb = 0
for([i, line] of [...arr.entries()]){
    for([j, char] of [...line.entries()]){
        if(Number.isInteger(parseInt(char))){
            if(checkNeighbours(i,j)){
                add = true
                numb = char
            }
        }else{
            sum += add ? numb : 0
            add = false
        }
    }
}

console.log(sum)