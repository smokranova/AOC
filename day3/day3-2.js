let fileHandler = require('../lib/fileHandler.js')
let input = fileHandler.getInputArr('../inputs/input3.txt')
let iLen = input[0].length
let jLen = input.length
let num = ""
let add = false

/**
 * creates a grid that 
 * @returns 
 */
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
    return Number.isInteger(parseInt(it));
}

let arr = createGrid()

let checkNeighbours = function(i, j){
    let height = arr.length
    let width = arr[i].length
    let nums = []
    let s = 0
    for(let x = i-1; x <= i+1; x++){
        for(let y = j-1; y <= j+1; y++){
            if(x >= 0 && x < height && y >= 0 && y < width){
                if(isSpecial(arr[x][y])){
                    if(!nums.includes(arr[x][y])){ nums.push(arr[x][y])}
                }
            }
        }
    }
    if(nums.length == 2) {
        s = nums[0] * nums[1]
    }
    return s
}

let sum = 0

for([i, line] of [...arr.entries()]){
    for([j, char] of [...line.entries()]){
        if(char === "*"){
            sum += checkNeighbours(i,j)
        }
    }
}

console.log(sum)