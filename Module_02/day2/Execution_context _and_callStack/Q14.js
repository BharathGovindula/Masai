// You need to debug and refactor a script meant to handle user profiles in an application. The script uses object methods but has issues with method referencing and logical errors.

// Code Sample:

// const userProfile = {

// name: "Alice",

// age: 28,

// details: function() {

// return ${this.name} is ${this.age} years old.; },

// updateAge(newAge) {

// if (newAge <= 0) {

// console.log("Invalid age.");

// return; }

// this.age = newAge;

// console.log(this.details); } };

// userProfile.updateAge(30);

// console.log(userProfile.details()); // Expected: "Alice is 30 years old."

// Steps:

// Correct the updateAge method to ensure it properly logs updated user details.
// Fix any other method referencing errors or logical inconsistencies.
// Ensure that all changes adhere to good practices in JavaScript ES6.







const userProfile = {
    name: "Alice",
    age: 28,

    details() {
        return `${this.name} is ${this.age} years old.`;
    },

    updateAge(newAge) {
        if (typeof newAge !== "number" || newAge <= 0) {
            console.log("Error: Invalid age.");
            return;
        }

        this.age = newAge;
        console.log(this.details()); // Correct method referencing
    }
};

// Testing the system
userProfile.updateAge(30); // Should log: "Alice is 30 years old."
console.log(userProfile.details()); // Should return: "Alice is 30 years old."




// Fixes and Improvements:
// Fixed Template Literal Syntax in details Method:

// Original: return ${this.name} is ${this.age} years old.;
// Fixed: return `${this.name} is ${this.age} years old.`;
// Fixed Incorrect Method Referencing in updateAge:

// Original: console.log(this.details);  (Missing ())
// Fixed: console.log(this.details()); 
// Added Type Validation in updateAge:

// Prevents invalid age values (non-numeric, zero, or negative values).
// Refactored Function Syntax for details:

// Changed details: function() {...} to details() {...} for cleaner ES6 syntax.
