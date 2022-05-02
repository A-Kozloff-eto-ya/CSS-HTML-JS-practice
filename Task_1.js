//Напишите решение, которое вычисляет сумму квадратных корней для всех чётных чисел целочисленного массива.

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
let evenNumbers = numbers.filter(function(item) {
    return item % 2 === 0;
});
console.log(evenNumbers)

let rootNumbers = evenNumbers.map(item => Math.pow(item, 0.5));
console.log(rootNumbers)

let sumRootNumbers = rootNumbers.map(i => x += i, x=0).reverse()[0]
console.log(sumRootNumbers)