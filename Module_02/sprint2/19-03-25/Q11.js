function extractAndReverse(arr) {
    let subArray = arr.slice(2, 4); 
    return subArray.reverse(); 
}

let numbers = [15, 30, 45, 60, 75, 90];
console.log(extractAndReverse(numbers)); // Output: [60, 45]
console.log(numbers); // Original array remains unchanged
