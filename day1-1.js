let fileHandler = require('./fileHandler.js')
let input = fileHandler.getInput('input1-1.txt')
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
    num = num[0] + num.slice(-1)[0]
    sum+=parseInt(num)
    console.log(num)
}
console.log(parseInt(sum))