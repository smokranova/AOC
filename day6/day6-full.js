// Time:      71530
// Distance:  940200

let day = "6"
let fileHandler = require('../lib/fileHandler.js')
let input = fileHandler.getInputArr(`../inputs/input${day}.txt`)

let time = parseInt(input[0].split(":")[1].replaceAll(" ", ""))
let dist = parseInt(input[1].split(":")[1].replaceAll(" ", ""))

let times = input[0].split(":")[1].trim().split(/ +/).map(it => parseInt(it))
let distances = input[1].split(":")[1].trim().split(/ +/).map(it => parseInt(it))

let calcTravelled = function(timePressing, timeLeft){
    let speed = timePressing
    return speed * timeLeft
}

let getMaxWins = function(time, dist){
    let total = 0
    for(let t = 0; t < time; t++){
        let travelled = calcTravelled(t, time-t)
        if(travelled > dist){            
            total ++
        }
    }
    return total
}
let ans = 1
for(let i = 0; i < times.length; i++){
    ans *= getMaxWins(times[i], distances[i])
}

console.log("Part 1:", ans)

ans = getMaxWins(time, dist);
console.log("Part 2:", ans)