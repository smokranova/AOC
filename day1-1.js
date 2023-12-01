let fileHandler = require('./fileHandler.js')
let input = fileHandler.getInput('input1-1.txt')
let arrInput = input.split("\n")
let sum = 0

for(x of arrInput){
    let num = ""
    for(char of x){
        let maybeNum = parseInt(char)
        if(parseInt(maybeNum).toString()===char){
            num += maybeNum
        }
        if(num.length > 1){
            num = num[0] + (num.length > 1 ? num[num.length-1] : num[0])
        }else{
            num = num + num
        }
    }
    sum+=parseInt(num)
    console.log(num)
}
console.log(parseInt(sum))