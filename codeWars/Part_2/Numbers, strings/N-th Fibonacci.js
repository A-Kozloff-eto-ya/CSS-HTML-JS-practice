// I love Fibonacci numbers in general, but I must admit I love some more than others.
//
// I would like for you to write me a function that when given a number (n) returns the n-th number in the
// Fibonacci Sequence.

function nthFibo(n) {
    let arr = [0, 1]
    for (let i = 2; i < n; i++) {
        arr.push(arr[i - 1] + arr[i - 2])
    } return arr[n - 1]

}

console.log(nthFibo(4))

// alternative

// function nthFib(n) {
//     if (n <= 1) return 0;
//     if (n === 2) return 1;
//     return nthFib(n - 1) + nthFib(n - 2);
// }
//
// nthFib(4)


