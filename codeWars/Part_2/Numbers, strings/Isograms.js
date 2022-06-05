//An isogram is a word that has no repeating letters, consecutive or non-consecutive.
// Implement a function that determines whether a string that contains only letters is an isogram.
// Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str) {
    let upStrArr = str.toUpperCase().split('')
    for (let i = 0; i < upStrArr.length; i++) {
        for (let j = 0; j < i; j++)
            if (upStrArr[j] === upStrArr[i]) {
                return false
            }
    } return true
}
console.log(isIsogram('same chars may not be adjacent'))