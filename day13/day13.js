let day = "13"
let lib = require('../lib/fileHandler.js')
let input = lib.getInput(`../inputs/input${day}.txt`)

//405

// #.##..##.
// ..#.##.#.
// ##......#
// ##......#
// ..#.##.#.
// ..##..##.
// #.#.##.#.

// #...##..#
// #....#..#
// ..##..###
// #####.##.
// #####.##.
// ..##..###
// #....#..#

let matches = function(m1, m2){
    let bad = 0
    for(let i = 0; i < m1.length; i++){
        if(m1[i] !== m2[i]){
            bad ++
        }
    }
    return bad ==1
}

let process = function(map, i, j){
    if(j >= map.length){
        return 0
    }  
    let match = matches(map[i], map[j])  
    if(match){
        return checkMatch(map, i, j) ? j : process(map, i+1, j+1)
    }
    return process(map, i + 1, j + 1, 0)
}

let checkMatch = function(map, i, j){
    if(j >= map.length|| i < 0){
        return true
    }  
    let match = matches(map[i], map[j]) 
    if(match){
        return checkMatch(map, i-1, j + 1) && match
    }
    return false
}

input=input.split("\r\n\r\n")
input = input.map(m => m.trim().split("\n").map(x => x.trim().split("")))




let ans = 0
let i = 0

for(map of input){
    let j = 0
    let x = Math.round(map.length / 2)
    let a = process(map,0,1, 0) * 100
    ans += a
    let rotated = lib.rotateMatrix(map)
    let b = process(rotated,0,1,0)
    ans += b 
    console.log(a, b)
    i++
}

console.log(ans)