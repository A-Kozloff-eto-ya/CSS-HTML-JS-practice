//you are asked to square every digit of a number and concatenate them.
//
// For example, if we run 9119 through the function, 811181 will come out, because 9^2 is 81 and 1^2 is 1.
//
// Note: The function accepts an integer and returns an integer

function squareDigits(num){
    let stringNumbers = num.toString()
    let strMassiveNumbers = Array.from(stringNumbers)
    let massiveNumbers = strMassiveNumbers.map((str) => parseInt(str))
    let powMassiveNumbers = massiveNumbers.map(item => Math.pow(item, 2))
    let strPowMassiveNumbers = powMassiveNumbers.toString()
    let filteredStrNumbers = strPowMassiveNumbers.replace(/,/g, '')
    return Number(filteredStrNumbers)
}

