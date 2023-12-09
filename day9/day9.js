let day = "9"
let fileHandler = require('../lib/fileHandler.js')
let input = fileHandler.getInputArr(`../inputs/input${day}.txt`)

// 0 3 6 9 12 15 => -3
// 1 3 6 10 15 21 => 0
// 10 13 16 21 30 45 => 5

// 5  10  13  16  21  30  45
//   5   3   3   5   9  15
//    -2   0   2   4   6
//       2   2   2   2
//         0   0   0

let process = function(line){
    let dif = getDif(line)
    let ans = line.slice(-1)[0]
    while(!allZero(dif)){
        ans += dif.slice(-1)[0]
        dif = getDif(dif)
    }
    return ans
    
}

let allZero = function(line){
    return line.every(x => x == 0)
}

let getDif = function(line){
    let dif = []
    for(let i = 1; i < line.length; i++){
        dif.push(line[i] - line[i-1])
    }
    return dif

}

let ans = 0

input = input.map(line => line.split(" ").map(it => parseInt(it)))

for(line of input){
    ans += process(line)
}

let ans2 = 0
for(line of input){
    ans2+=process(line.reverse())
}

console.log(ans)
console.log(ans2)

//2043677056
//1062
