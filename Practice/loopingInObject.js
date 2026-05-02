// Loop in Object

const person = {
  name: "John",
  age: 30,
  city: "New York",
};

// const keysOfPerson = Object.keys(person);
// console.log(keysOfPerson); // Output: [ 'name', 'age', 'city' ]

// const valuesOfPerson = Object.values(person);
// console.log(valuesOfPerson); // Output: [ 'John', 30, 'New York' ]

// // Both key and value
// const entriesOfPerson = Object.entries(person);
// console.log(entriesOfPerson); // Output: [ [ 'name', 'John' ], [ 'age', 30 ], [ 'city', 'New York' ] ]]

// For of loop over object
for (const value of Object.entries(person)) {
  console.log(value);
}
