// Find even and odd number
// let number = 54;
// if (number % 2 === 0) {
//     console.log(number + " is an even number");
// } else {
//     console.log(number + " is an odd number");
// }

// Find minimum of three
let x = 10, y = 3, z = 10;
if(x < y) {
    if(x < z) {
        console.log(x + " is the minimum of three");
    } else if(y < z) {
        console.log(x + " is the minimum of three");
    } else {
        console.log(z + " is the minimum of three");
    }
} else if (x < z) {
    console.log(y + " is the minimum of three"); 
} else if (y < z) {
    console.log(y + " is the minimum of three"); 
} else {
    console.log(z + " is the minimum of three");
}