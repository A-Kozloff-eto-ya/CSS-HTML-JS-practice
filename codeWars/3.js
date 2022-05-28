//Given a year, return the century it is in.

function century(year) {
    let cent
    if (year % 100 === 0)
        cent = year / 100

    else if (year % 100 > 0) {
        cent = (year / 100) + 1

    }
    return Math.trunc(cent)
}

console.log(century(1705))

