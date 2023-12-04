let fileHandler = require('../lib/fileHandler.js')
let input = fileHandler.getInput('../inputs/input1-1.txt')
let arrInput = input.split("\n")
//54418
let sum = 0
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
    sum+=parseInt(num[0] + num[num.length-1])
}
console.log(parseInt(sum))