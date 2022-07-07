//Given a string made of digits [0-9],
// return a string where each digit is repeated a number of times equals to its value.

function explode(s) {
    const res = []
    for (let i = 0; i < s.length; i++) {
        res.push(s[i].repeat(s[i]))
    }
    return res.join('')

}

console.log(explode('123456'))
// Alternative:

// function explode(s) {
//     return s.split('').map(n => n.repeat(parseInt(n))).join('')
// }

