let fileHandler = require('../lib/fileHandler.js')
let input = fileHandler.getInputArr('../inputs/input4.txt')
//30

// Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53 
// Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19 
// Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
// Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
// Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
// Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11


//split by :, diregard card number
//split by |, first part + second part
//map amounts with cards
let cardAmounts = input.map(n => 1)
sum = 0
total = 0
let index = 0
let max = cardAmounts.length

for(let card of input){
    let amount = cardAmounts[index]
    console.log(card, amount)
    let cardAndInput = card.split(":")
    let fpluss = cardAndInput[1]
    fpluss = fpluss.trim()
    fpluss = fpluss.split(" | ")
    let winning = fpluss[0].split(/ +/)
    let mine = fpluss[1].split(/ +/)

    for(let n of mine){
        if(winning.includes(n)){
            sum ++
        }
    }
    console.log(sum)
    for(let i = index + 1; i < index + 1 + sum; i++){
        if(i < max){
            cardAmounts[i] += cardAmounts[index]
        }
    }
    sum = 0
    index++
}
let i = 0
for(y of cardAmounts){
    i += y
}
console.log(i)