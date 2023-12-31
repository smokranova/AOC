// seeds: 79 14 55 13

// seed-to-soil map:
// 50 98 2
// 52 50 48

// soil-to-fertilizer map:
// 0 15 37
// 37 52 2
// 39 0 15

// fertilizer-to-water map:
// 49 53 8
// 0 11 42
// 42 0 7
// 57 7 4

// water-to-light map:
// 88 18 7
// 18 25 70

// light-to-temperature map:
// 45 77 23
// 81 45 19
// 68 64 13

// temperature-to-humidity map:
// 0 69 1
// 1 0 69

// humidity-to-location map:
// 60 56 37
// 56 93 4
let fileHandler = require('../lib/fileHandler.js')
let input = fileHandler.getInputArr('../inputs/input5.txt')

let process = function(map, seeds){
    let newSeeds = []
    for(seed of seeds){
        newSeeds.push(map.get(seed) ? map.get(seed) : seed)
    }   
    return newSeeds 
}

let isNumber = function(it){
    return Number.isInteger(parseInt(it));
}

let addNums = function(numbers, map){
    let destinationRange = numbers[0]
    let sourceRange = numbers[1]
    let rangeLen = numbers[2]
    for(i = 0; i < rangeLen; i++){
        map.set(sourceRange + i, destinationRange + i)
    }
    return map
}

let getLowest = function(arr){
    let low = arr[0]
    for(a of arr){
        if(a < low){
            low = a
        }
    }
    return low
}

let ans = ""

let seedsArr = input[0]
let seeds = seedsArr.split(": ")[1].split(" ").map(it => parseInt(it))
let map = new Map()
//The first line has a destination range start of 50, a source range start of 98, and a range length of 2.
for(let i = 2; i < input.length; i++){
    if(isNumber(input[i][0])){
        let numbers = input[i].split(" ").map(it => parseInt(it))
        map = addNums(numbers, map)
    }
    else if(input[i].length == 1){
        seeds = process(map, seeds)
        map = new Map()
    }
}
seeds = process(map, seeds)
ans = getLowest(seeds)
//Seed 79, soil 81, fertilizer 81, water 81, light 74, temperature 78, humidity 78, location 82.

console.log(ans)