// Write a function deepClone(obj) that creates a deep copy of a given object using JSON.stringify() and JSON.parse(). The function should ensure that modifying the cloned object does not affect the original object.

// Example Input:

// { name: "Alice", hobbies: ["reading", "traveling"] }

// Example Output (After modifying the clone):

// Original: { name: "Alice", hobbies: ["reading", "traveling"] }

// Clone: { name: "Alice", hobbies: ["reading", "traveling", "coding"] }



function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}


let original = { name: "Alice", hobbies: ["reading", "traveling"] };

// Create a deep clone
let cloned = deepClone(original);

// Modify the cloned object
cloned.hobbies.push("coding");

console.log("Original:", original); 
console.log("Clone:", cloned);