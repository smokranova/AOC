let fileHandler = require('../lib/fileHandler.js')
let input = fileHandler.getInputArr('../inputs/input5.txt')

let process = function(map, seed){
    let newSeeds = []
    let isInMap = false
    let line = []
    for(entry of map){
        if(seed >= entry[0] && seed < entry[0] + entry[2]){
            isInMap = true
            line = entry
        }
    }
    return (isInMap ? seed + line[1] - line[0] : seed);
}

let isNumber = function(it){
    return Number.isInteger(parseInt(it));
}

let addNums = function(numbers, map){
    let destinationRange = numbers[0]
    let sourceRange = numbers[1]
    let rangeLen = numbers[2]
    map.push([sourceRange, destinationRange, rangeLen])
    return map
}

let getLowest = function(arr){
    // let low = arr[0]
    // for(a of arr){
    //     if(a < low){
    //         low = a
    //     }
    // }
    // return low
}

let ans = Number.MAX_SAFE_INTEGER - 1;

let seedsArr = input[0]
let seedsRanges = seedsArr.split(": ")[1].split(" ").map(it => parseInt(it))
/*let seeds = []
for(let i = 0; i < seedsRanges.length; i+=2){
    for(let j = 0; j < seedsRanges[i+1]; j++){
        seeds.push(seedsRanges[i] + j)
    }
}*/
let seeds = []
for(let i = 0; i < seedsRanges.length; i+=2){
    seeds.push([seedsRanges[i], seedsRanges[i] + seedsRanges[i+1]])
}
let map = []

let inputProper = []

for(let i = 0; i < input.length; i++){
    if(isNumber(input[i][0])){
        inputProper.push(input[i].split(" ").map(it => parseInt(it)))
    }
    else{
        inputProper.push(input[i])
    }
}

let maps = []
let max = input.length

for(let i = 2; i < max; i++){
    let inp = inputProper[i]
    if(isNumber(inp[0])){
        let numbers = inp
        map = addNums(numbers, map)
    }
    else if(inputProper[i].length == 1){
        maps.push(map)
        map = []
    }
}
maps.push(map)

console.log("gonna do the big loopy loop now")
//The first line has a destination range start of 50, a source range start of 98, and a range length of 2.
for(let j = 0; j < seeds.length; j++){
    let s = seeds[j]
    for(let x = s[0]; x < s[1]; x++){
        let seed = x
        for(map of maps){
            seed = process(map, seed)
        }
        ans = ans > seed ? seed : ans
       // console.log("x", x)
    }
    console.log(s)
    console.log("finished j", j)
}

console.log("ans:   ", ans)
