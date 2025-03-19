// Method to filter even numbers
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

// Method to calculate sum of an array
function sumOfArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

// Method to sort and concatenate two arrays
function sortAndConcat(arr1, arr2) {
    return arr1.sort((a, b) => a - b).concat(arr2.sort((a, b) => a - b));
}


let array1 = [10, 5, 8, 3, 12];
let array2 = [7, 2, 9, 4, 6];

console.log("Filtered Even Numbers (Array 1):", filterEvenNumbers(array1));
console.log("Filtered Even Numbers (Array 2):", filterEvenNumbers(array2));

console.log("Sum of Array 1:", sumOfArray(array1));
console.log("Sum of Array 2:", sumOfArray(array2));

console.log("Sorted and Concatenated Array:", sortAndConcat(array1, array2));
