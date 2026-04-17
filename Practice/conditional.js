// Find even and odd number
// let number = 54;
// if (number % 2 === 0) {
//     console.log(number + " is an even number");
// } else {
//     console.log(number + " is an odd number");
// }

// Find minimum of three
let x = 10, y = 3, z = 10;
// if(x < y) {
//     if(x < z) {
//         console.log(x + " is the minimum of three");
//     } else if(y < z) {
//         console.log(x + " is the minimum of three");
//     } else {
//         console.log(z + " is the minimum of three");
//     }
// } else if (x < z) {
//     console.log(y + " is the minimum of three"); 
// } else if (y < z) {
//     console.log(y + " is the minimum of three"); 
// } else {
//     console.log(z + " is the minimum of three");
// }
// Simpler way
// if (x < y && x < z) {
//     console.log(x + " is the minimum of three");
// } else if (y < x && y < z) {
//     console.log(y + " is the minimum of three");
// } else {
//     console.log(z + " is the minimum of three");
// }

// Is a valid triangle
// let a = 3, b = 4, c = 5;
// if (a + b > c && a + c > b && b + c > a) {
//     console.log("The sides form a valid triangle");
// }

//  Check if traingle is equilateral, isosceles or scalene
let a = 3, b = 3, c = 3;
if (a === b && b === c) {
    console.log("The triangle is equilateral");
} else if (a === b || b === c || a === c) {
    console.log("The triangle is isosceles");
} else {
    console.log("The triangle is scalene");
}