//You get an array of arrays.
// If you sort the arrays by their length, you will see, that their length-values are consecutive.
// But one array is missing!
//
//
// You have to write a method, that return the length of the missing array.

function getLengthOfMissingArray(arrayOfArrays) {
    console.log(arrayOfArrays)

    if (arrayOfArrays.length === 0) {return 0}
        if (typeof arrayOfArrays === 'number') {
            arrayOfArrays.sort()

        } else {
            let res = arrayOfArrays.map(item => item.length).sort()
            console.log(res)
            for (let i = 0; i < res.length; i++) {
                if (res[i + 1] - res[i] !== 1) {
                    return res[i] + 1
                }
            }
        }

}


console.log(getLengthOfMissingArray([4, 1, 4, 4, 1]))
console.log(getLengthOfMissingArray([ ]))
console.log(getLengthOfMissingArray([ [ 5, 2, 9 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]]))
console.log(getLengthOfMissingArray([ [ 1, 2 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]]))
console.log(getLengthOfMissingArray([ [ null ], [ null, null, null ] ]))
console.log(getLengthOfMissingArray([ [ 'a', 'a', 'a' ], [ 'a', 'a' ], [ 'a', 'a', 'a', 'a' ], [ 'a' ], [ 'a', 'a', 'a', 'a', 'a', 'a' ]]))
