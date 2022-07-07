// You are writing a function that takes two sets of arguments of arbitrary length.
// The return value will be the sum of the values of all of the arguments.
//
// The function should contain at least 1 argument per set.

// function calculate(...args) {
//     function calculate2 (...args2) {
//         let arr = [args, args2].push(args, args2)
//         console.log(arr)
//     }
// }


function calculate (...args) {
    return (...args2) => {
        return args.reduce((a,b) => a + b) + args2.reduce((a,b) => a + b)
    }
}
calculate(2,4)( 3,7,1)


