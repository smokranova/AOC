let fileHandler = require('../lib/fileHandler.js')
let input = fileHandler.getInputArr('../inputs/input2.txt')
//Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
//we have 12 red cubes, 13 green cubes, and 14 blue cubes
//Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
//Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red

let available = [12,13,14]
let colors = ['red', 'green', 'blue']

let processColors = function(cubeSets){
    for(cubeSet of cubeSets){
        //one color
        let num = parseInt(cubeSet.match(/\d+/)[0])
        let color = cubeSet.split(" ")[1]
        let index = colors.indexOf(color.trim())
        if(num > available[index]){
            return false
        }
    }
    return true
}

let processGame = function(game, sum){
    let set = game.split(": ")
    let gameNum = parseInt(set[0].match(/\d+/)[0])
    let cubeSets = set[1].split('; ')
    let ans = true
    //parts of line
    for(cubeSet of cubeSets){
        ans = processColors(cubeSet.split(', '))
        if(!ans){
            return 0
        }
    }
    return gameNum
}

let sum = 0
for(x of input){
    //one line
    sum += processGame(x, sum)
}
console.log(sum)