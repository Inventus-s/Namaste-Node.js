// // Higher Order funtions with arrays
// const numbers = [1, 2, 3, 4, 5];

// const square = (x) => x * x;

// // Using map to create a new array of squared numbers
// const squaredNumbers = numbers.map(square);
// console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// Map example, create a new array of names in uppercase
// const names = ["Alice", "Bob", "Charlie"];
// const upperCaseNames = names.map((name) => name.toUpperCase());
// console.log(upperCaseNames); // Output: ['ALICE', 'BOB', 'CHARLIE']

// // Filter example, create a new array of even numbers
// const numbers = [1, 2, 3, 4, 5, 6];
// const evenNumbers = numbers.filter((num) => num % 2 === 0);
// console.log(evenNumbers); // Output: [2, 4, 6]

// // Reduce example, calculate the sum of all numbers
// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sum); // Output: 21

// Testing Reduce
const numbers = [1, 2, 3, 4, 5];

const customReduce = (accumulator, currentValue) => {
    console.log(`Accumulator: ${accumulator}, Current Value: ${currentValue}`);
    return accumulator + currentValue;
}

numbers.reduce(customReduce, 0); // calling reduce with custom function and initial value of 0
numbers.reduce(customReduce); // calling reduce with custom function without initial value, it will take the first element of the array as the initial value