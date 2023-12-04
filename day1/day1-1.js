let fileHandler = require('../lib/fileHandler.js')
let input = fileHandler.getInput('../inputs/input1-1.txt')
let arrInput = input.split("\n")
let sum = 0

//54304

for(x of arrInput){
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