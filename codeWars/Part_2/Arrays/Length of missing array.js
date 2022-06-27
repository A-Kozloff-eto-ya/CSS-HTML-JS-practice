//You get an array of arrays.
// If you sort the arrays by their length, you will see, that their length-values are consecutive.
// But one array is missing!
//
//
// You have to write a method, that return the length of the missing array.

function getLengthOfMissingArray(arrayOfArrays) {
    if (arrayOfArrays === null || arrayOfArrays.length === 0) {
        return 0
    }
    if (Array.isArray(arrayOfArrays)) {
        let res2 = []
        for (let i = 0; i < arrayOfArrays.length; i++) {
            if (arrayOfArrays[i] === null || arrayOfArrays[i].length === 0) {return 0}
            res2.push(arrayOfArrays[i].length)
        }
        res2.sort((a, b) => a-b)
        for (let i = 0; i < res2.length; i++) {
            if (res2[i + 1] === 0 || res2[i] === 0) {
                return 0
            }
            if (res2[i + 1] - res2[i] !== 1) {
                return res2[i] + 1
            }
        }
    }
}


console.log(getLengthOfMissingArray([ [ null ], [ null, null, null ]]))
