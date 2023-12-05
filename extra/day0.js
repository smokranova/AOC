let fileHandler = require('../lib/fileHandler.js')
let input = fileHandler.getInput('../inputs/input00.txt')
let arrInput = input.split("\n")
let totals = []
let i = 0

totals.push(0)
let max = 0
let current = 0

for(let x of arrInput){
    if(x.length > 1){
        totals[i] += parseInt(x)
        current += parseInt(x)
    }else{
        if(current > max){
            max = current
        }
        current = 0
        totals.push(0)
        i++
    }
}
console.log(max)
