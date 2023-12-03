let fileHandler = require('./fileHandler.js')
let input = fileHandler.getInputArr('input3.txt')
// 467835

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

let i = 0;
let sum = 0;
let num = "";
let add = false
let arr = []
let iLen = input[0].length
let jLen = input.length
console.log(iLen, jLen)

let checkAround = function(i,j){
    let lineLen = input[i].length
    let endLine = input.length
    for(ii = i-1; ii <= i+1; ii++){
        for(jj = j-1; jj <= j+1; jj++){
            if(jj > 0 && jj < endLine && ii > 0 && ii < lineLen){
                if(isSpecial(input[ii][jj])){
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

for(let i = 0; i < iLen; i++){
    let arrIn = []
    for(let j = 0; j < jLen; j++){
        arrIn.push(0)
    }
    arr.push(arrIn)
}

for(line of input){
    let j = 0;
    for(char of line){
        if(isNumber(char)){
            num += char
            if (checkAround(i, j)){
                add = true
            }
        } else {
            let len = num.length
            for(y = j - 1; y >= j - len; y --){
                arr[i][y] = isNumber(num) ? parseInt(num) : ".";
            }
            num = ""
            add = false
        }
        if(arr[i][j] === 0 && !isNumber(char)){
            arr[i][j] = char
        }
        j++
    }
    i++
}

let checkAround2 = function(i,j){
    let lineLen = arr[i].length
    let endLine = arr.length
    let sum = 0
    let nums = []
    for(ii = i-1; ii <= i+1; ii++){
        for(jj = j-1; jj <= j+1; jj++){
            if(jj >= 0 && jj < endLine && ii >= 0 && ii < lineLen){
                if(isSpecial2(arr[ii][jj])){
                    if(!nums.includes(arr[ii][jj])){ nums.push(arr[ii][jj])}
                }
            }
        }
    }
    if(nums.length == 2) {
        sum = nums[0] * nums[1]
    }
    console.log(nums)
    return sum
}
let isSpecial2 = function(it){
    return isNumber2(it)
}

let isNumber2 = function(it){
    return typeof it === 'number'
}


i = 0

for(line of arr){
    j = 0
    for(char of line){
        if(char === "*"){
            sum += checkAround2(i, j)
        }
        j++
    }
    i++
}

console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])
console.log(sum)