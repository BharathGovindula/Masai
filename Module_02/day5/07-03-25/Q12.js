// Create a closure that simulates a simple counter.
// Implement a function createCounter that has a private count variable.
// The function should return two methods: increment to increase the count by 1 and getCount to return the current value of the counter.
//  Ensure that count cannot be accessed directly from outside the closure.

// Example:

// const counter = createCounter();

// console.log(counter.increment()); // Output: 1;

// console.log(counter.increment()); // Output: 2;

// console.log(counter.getCount()); // Output: 2;
function createCounter() {
    let count = 0; // Private variable

    return {
        increment: function() {
            count++;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}

const counter = createCounter();

console.log(counter.increment()); // Output: 1
console.log(counter.increment()); // Output: 2
console.log(counter.getCount());  // Output: 2

