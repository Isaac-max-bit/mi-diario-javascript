const numbers = [1, 2, 3, 4, 5, 6, 7, 9, 10]
const evenNUmbers = numbers.filter(number => number % 2 === 0)


console.log(numbers)
console.log(evenNUmbers)

//  reduce() * case 1

const numberReduce = [1, 2, 3, 4, 5];
const sum = numberReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(numberReduce); // Imprime el arreglo original
console.log(sum); // Imprime la suma de los elementos

// reduce() * case 2

const words = ['apple','banana','hello','bye','banana','bye','bye']

const wordFrecuency = words.reduce((accumulator, currentValue) => {
    if(accumulator[currentValue]){
        accumulator[currentValue]++
    } else {
        accumulator[currentValue] = 1 
    }
    return accumulator
}, {})

console.log(wordFrecuency)