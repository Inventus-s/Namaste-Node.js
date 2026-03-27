//  Mutibility and Immutability

const arr = [1, 2, 3];
arr.push(4); // Mutating the original array
console.log(arr); // Output: [1, 2, 3, 4]

const str = "Hello";
const newStr = str + " World"; // Creating a new string, original string remains unchanged
console.log(str); // Output: Hello
console.log(newStr); // Output: Hello World

str[1] = "a"; // Attempting to change a character in the string (immutable)
console.log(str); // Output: Hello (string remains unchanged)