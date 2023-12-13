let day = "12"
let fileHandler = require('../lib/fileHandler.js')
let input = fileHandler.getInputArr(`../inputs/input${day}.txt`)

let process = function(el){
    let [springMap, springNums] = [...el.split(" ")]
    return solveLine(springMap, springNums)
}

// ???.### 1,1,3
// .??..??...?##. 1,1,3
// ?#?#?#?#?#?#?#? 1,3,1,6
// ????.#...#... 4,1,1
// ????.######..#####. 1,6,5
// ?###???????? 3,2,1

// ?###???????? 3,2,1
// .###.##.#...
// .###.##..#..
// .###.##...#.
// .###.##....#
// .###..##.#..
// .###..##..#.
// .###..##...#
// .###...##.#.
// .###...##..#
// .###....##.#

let solveLine = function(map, nums){
    //case when just one num left and it fits on the ?s
    if(nums.length === 1){
        let res =  map.length - nums[0] + 1
        return res >= 0 ? res : 0
    }

    for(el of map){
        console.log(el)
    }


    //return solveLine(?, ?)
}


let ans = 0
let i = 0

let output = input

for(line of input){
    ans += process(line)
    i++
}

console.log(ans)