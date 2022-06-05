function order(words){
    let arr = words.split(' ')
    const findNumber = words.match(/[1-9]/g);
    findNumber.sort()

    console.log(findNumber)
}

console.log(order('is2 Thi1s T4est 3a'))