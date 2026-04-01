const x = {name: "Mukund", age: 25};

const y = {name: "Mukund", age: 25};

console.log(x["name"]); // Output: Mukund
console.log(y.name); // Output: Mukund

// Muatbility of objects
x.age = 26; // Mutating the original object
console.log(x);