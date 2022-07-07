// Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair
// of gloves you can constitute from the gloves you have in your drawer.
//
// Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only
// gloves of the same color can form pairs.

function numberOfPairs(gloves) {
    let res = 0
    let arr = []
    arr.push(...gloves)
    let sortArr = arr.sort()
    for (let i = 0; i < sortArr.length; i++) {
        if (sortArr[i] === sortArr[i + 1]) {
            res += 1
            i++
        }
    } return res
}

// Alternative

// function numberOfPairs(gloves) {
//     let res = 0
//     let arr = [].concat(...gloves)
//     for (let i = 0; i < arr.sort().length; i++) {
//         if (arr[i] === arr[i + 1]) {
//             res += 1
//             i++
//         }
//     } return res
// }

console.log(numberOfPairs(['gray','black','purple','purple','gray','black', 'gray','black','purple','purple','gray','black', 'gray','black','purple','purple','gray','black', 'gray','black','purple','purple','gray','black']))

