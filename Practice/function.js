// Write a function to check if the no is even or odd

const isEven = (num) => (num % 2 === 0 ? "Even" : "Odd");
console.log(isEven(4)); // Even
console.log(isEven(7)); // Odd

// Print even numer in a range
for (let i = 1; i <= 20; i++) {
  if (isEven(i) === "Even") {
    console.log(i);
  }
}
