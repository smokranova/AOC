let fileHandler = require('./fileHandler.js')
let input = fileHandler.getInput('input1-1.txt')
let arrInput = input.split("\n")
//54418
let sum = 0
//29, 83, 13, 24, 42, 14, and 76
let nums = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
let numsEw = ['one1one', 'two2two', 'three3three', 'four4four', 'five5five', 'six6six', 'seven7seven', 'eight8eight', 'nine9nine']
let newArr = []

for(let x of arrInput){
    for(let num of nums){
        x = x.replaceAll(num, numsEw[nums.indexOf(num)])
    }
    newArr.push(x)
}

for(x of newArr){
    let num = ""
    for(char of x){
        let maybeNum = parseInt(char)
        if(parseInt(maybeNum).toString()===char){
            num += maybeNum
        }
    }
    num = num[0] + num.slice(-1)[0]
    sum+=parseInt(num)
    console.log(num)
}
console.log(parseInt(sum))