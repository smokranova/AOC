let day = "7"
let fileHandler = require('../lib/fileHandler.js')
let input = fileHandler.getInputArr(`../inputs/input${day}.txt`)

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

let getMap = function(set){
    let map = new Map()
    for(c of set){
        if(map.get(c)){
            map.set(c, map.get(c) + 1)
        }else{
            map.set(c, 1)
        }
    }
    return map
}

let isXOfAKind = function(set, x){
    let map = new Map()
    for(c of set){
        if(map.get(c)){
            map.set(c, map.get(c) + 1)
        }else{
            map.set(c, 1)
        }
    }
    // console.log(x, set, map)
    for(el of map.keys()){
        if(el == x){
            return true
        }
    }
    return false
    // let f = set[0]
    // let count = 0
    // for (c of set){
    //     if(c != f){
    //         count ++
    //     }
    //     if(set == "T55J5") {
    //         console.log(c, count, f)
    //     }
    //     if(count >= (5-x)){
    //         return false
    //     }
    // }
}

let is5 = function(set){
    return checkAmountX(set, 1)
}

let is4 = function(set){
    let map = getMap(set)
    
    if([...map.values()].includes(4)){
        return true
    }
    return false
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
    if(map.size == x){
        return true
    }
    return false
}

//technically returns true when shoudlnt but that might be ok
let isFullHouse = function(set){
    return checkAmountX(set, 2)
}

let is3 = function(set){
    let map = getMap(set)
    
    if([...map.values()].includes(3)){
        return true
    }
    return false
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


let cardTypes = ["A", "K", "Q", "T", "9", "8", "7", "6", "5", "4", "3", "2", "J"]

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
    let c1 = checkRank(set1)
    let c2 = checkRank(set2)
    if(c1 < c2){
        return 1;
    }else if(c1 > c2){
        return -1;
    }else{
        return compareChars(set1, set2)
    }
}

// 32T3K is the only one pair and the other hands are all a stronger type, so it gets rank 1.
// KK677 and KTJJT are both two pair. Their first cards both have the same label, but the second card of KK677 is stronger (K vs T), so KTJJT gets rank 2 and KK677 gets rank 3.
// T55J5 and QQQJA are both three of a kind. QQQJA has a stronger first card, so it gets rank 5 and T55J5 gets rank 4.
//[is5, is4, isFullHouse, is3, twoPair, onePair, allDif]
// 32T3K 765 rank orig = 5
// T55J5 684 rank orig = 3 -/> wrong (is getting 4?)
// KK677 28 rank orig = 4
// KTJJT 220 rank orig = 4
// QQQJA 483 rank orig = 3
// 55555 0 (should be 0)
// 5A888 4 should be 3
// A5555 2 shpuld be 1


// 765, 684, 483, 220, 28 mine
// 765, 220, 28, 684, 483 correct

// (765 * 1 + 220 * 2 + 28 * 3 + 684 * 4 + 483 * 5)
// 6440

let calcAns = function(arr){
    let bids = arr.map(it => it[1])
    console.log(bids)
    return bids.reduce((p, c, i) => parseInt(p) + parseInt(c) * (i+1))
}

let ans = ""
input = input.map(it => it.split(" "))

// input.map(it => checkRank(it[0]))

ans = input.sort(customSort)

ans = calcAns(ans)

console.log(ans)