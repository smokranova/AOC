let day = "8"
let fileHandler = require('../lib/fileHandler.js')
let input = fileHandler.getInputArr(`../inputs/input${day}.txt`)

let process = function(el){

}

// RL

// AAA = (BBB, CCC)
// BBB = (DDD, EEE)
// CCC = (ZZZ, GGG)
// DDD = (DDD, DDD)
// EEE = (EEE, EEE)
// GGG = (GGG, GGG)
// ZZZ = (ZZZ, ZZZ)

let ans = 0
let map = new Map()

let steps = input[0].trim()
let stepIndex = steps.replaceAll("L", 0).replaceAll("R",1).split("").map(it => parseInt(it))
let startPos = []
console.log(stepIndex)

for(line of input.slice(2)){
    let instruction = line.trim().replace("=", "").replace("(", "").replace(")", "").replace(",", "").split(/ +/)
    if(instruction[0].endsWith("A")){
        startPos.push(instruction[0])
    }
    map.set(instruction[0], [instruction[1], instruction[2]]);
}

console.log(startPos)

let step = 0
let i = 0
let res = []

for(pos of startPos){
    while(!pos.endsWith("Z")){
        pos = map.get(pos)[stepIndex[step]]
        i++
        step++
        if(step >= stepIndex.length){
            step = 0
        }
    }
    res.push(i)
    i = 0
}
console.log(res)

let lcm = function(a, b) {
    const den = gcd(a, b);
    return (a * b) / den;
}

let gcd = function(a, b) { 
    for (let x = b; b > 0;) { 
        b = a % b; 
        a = x; 
        x = b; 
    } 
    return a; 
} 


console.log(res.reduce((a, b) => lcm(a, b)))
