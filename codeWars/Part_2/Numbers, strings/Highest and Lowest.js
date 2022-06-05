//In this little assignment you are given a string of space separated numbers,
// and have to return the highest and lowest number.

function highAndLow(numbers) {
    const arr = numbers.split(' ').map(num => parseInt(num))
    return [Math.max(...arr), Math.min(...arr)].join(' ')
}
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))

// function highAndLow(numbers) {
//     const arr = numbers.split(' ').map(num => parseInt(num)).sort((a, b) => a - b)
//     const highNum = arr[arr.length - 1]
//     const lowNum = arr[0]
//     return highNum + ' ' + lowNum
// }