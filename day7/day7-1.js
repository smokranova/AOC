let day = "7"
let fileHandler = require('../lib/fileHandler.js')
let input = fileHandler.getInputArr(`../inputs/input${day}.txt`)

// 32T3K 765
// T55J5 684
// KK677 28
// KTJJT 220
// QQQJA 483

// array.sort(function(x, y) {
//     if (x < y) {
//       return -1;
//     }
//     if (x > y) {
//       return 1;
//     }
//     return 0;
//   });

// Five of a kind, where all five cards have the same label: AAAAA 6
// Four of a kind, where four cards have the same label and one card has a different label: AA8AA 5
// Full house, where three cards have the same label, and the remaining two cards share a different label: 23332 4
// Three of a kind, where three cards have the same label, and the remaining two cards are each different from any other card in the hand: TTT98 3
// Two pair, where two cards share one label, two other cards share a second label, and the remaining card has a third label: 23432 2
// One pair, where two cards share one label, and the other three cards have a different label from the pair and each other: A23A4 1
// High card, where all cards' labels are distinct: 23456 0

let isXOfAKind = function(set, x){
    let f = set[0]
    let count = 0
    for (c of set){
        if(c != f){
            count ++
        }
        if(count >= (5-x)){
            return false
        }
    }
    return true
}

let is5 = function(set){
    return isXOfAKind(set, 5)
}

let is4 = function(set){
    return isXOfAKind(set, 4)
}

let checkAmountX = function(set, x){
    let map = new Map()
    for(c of set){
        if(map[c]){
            map[c] += 1
        }else{
            map.set(c, 1)
        }
    }
    if(map.size== x){
        return true
    }
    return false
}

//technically returns true when shoudlnt but that might be ok
let isFullHouse = function(set){
    return checkAmountX(set, 2)
}

let is3 = function(set){
    return isXOfAKind(set, 3)
}

let twoPair = function(set){
    return checkAmountX(set, 3)
}

let onePair = function(set){
    return checkAmountX(set, 4)
}

let allDif = function(set){
    return checkAmountX(set, 5)
}

let rankChecks = [is5, is4, isFullHouse, is3, twoPair, onePair, allDif]


let cardTypes = ["A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"]

let checkRank = function(set){
    let rank = 0
    let vals = []
    for(f of rankChecks){
        vals.push(f(set))
    }
    rank = vals.indexOf(true)

    return rank
}

let compareChars = function(set1, set2){
    for(let i = 0; i < set1.length; i++){
        let s1 = set1[i]
        let s2 = set2[i]
        if(cardTypes.indexOf(s1) > cardTypes.indexOf(s2)){
            return -1
        }else if(cardTypes.indexOf(s1) < cardTypes.indexOf(s2)){
            return 1
        }
    }
    console.log("sus")
    return 0
}

let customSort = function([set1, bid1], [set2, bid2]){
    if(checkRank(set1) < checkRank(set2)){
        return 1;
    }else if(checkRank(set1) > checkRank(set2)){
        return -1;
    }else{
        return compareChars(set1, set2)
    }
}

let calcAns = function(arr){
    let bids = arr.map(it => it[1])
    console.log(bids)
    return bids.reduce((p, c, i) => parseInt(p) + parseInt(c) * (i+1))
}

let ans = ""
input = input.map(it => it.split(" "))

ans = input.sort(customSort)

ans = calcAns(ans)

console.log(ans)