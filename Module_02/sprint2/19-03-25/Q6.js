// Create a simple JavaScript object called student with properties: name, age, and course. Then, use the JSON.stringify() method to convert the object into a JSON string and log it to the console.

// Example Input:

// let student = {
//   name: "Alice",
//   age: 22,
//   course: "Computer Science"
// };
// Expected Output:

// {
//   "name": "Alice",
//   "age": 22,
//   "course": "Computer Science"
// }


let student = {
    name: "Alice",
    age: 22,
    course: "Computer Science"
  };
  
  console.log(JSON.stringify(student, null, 2));
  