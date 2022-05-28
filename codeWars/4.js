//Your task is to create the function isDivideBy (or is_divide_by)
//to check if an integer number is divisible by both integers a and b.

function isDivideBy(number, a, b) {
    let res
    if (number % a === 0 && number % b === 0) {
        res = true
    } else {
        res = false
    }
    return res
}
