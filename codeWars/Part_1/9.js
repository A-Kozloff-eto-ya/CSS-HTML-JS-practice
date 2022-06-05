//Given a string of digits, you should replace any digit below 5 with '0'
//and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(x){
    const mas = Array.from(x)
    let mas2 = mas.map((x) => {
        const num = parseInt(x)
        if (num >= 5) {
            return 1
        } else {
            return 0
        }
    })
    return mas2.join('')
}