//The goal of this exercise is to convert a string to a new string where each character in the new string is
// "(" if that character appears only once in the original string, or ")" if that character appears more than once
// in the original string. Ignore capitalization when determining if a character is a duplicate.

function duplicateEncode(word) {
    let lowCase = word.toLowerCase()
    let res = ''
    for (let i = 0; i < lowCase.length; i++) {
            if (lowCase.lastIndexOf(lowCase[i]) === lowCase.indexOf(lowCase[i])) {
                res += '('
            } else {
                res += ')'
            }
        }
        return res
}
// Alternative solve

// function duplicateEncode(word){
//     const counts = {}
//     const symbols = word.toLowerCase().split('')
//     symbols.forEach(s => {
//         if (counts[s]) {
//             counts[s] += 1
//             console.log(counts)
//         } else {
//             counts[s] = 1
//             console.log(counts)
//         }
//     })
//     const result = symbols.map(s => {
//         if (counts[s] > 1) return ')'
//         return '('
//     })
//     return result.join('')
// }

console.log(duplicateEncode('recede'))