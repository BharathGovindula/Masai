// Write a function called multiplyNumbers that accepts two numbers as arguments and uses the apply() method to multiply them. The function should return the product.


// Write a function called multiplyNumbers that accepts two numbers as arguments and uses the apply() method to multiply them. The function should return the product.

function multiplyNumbers(a, b) {
    function multiply(x, y) {
        return x * y;
    }
    return multiply.apply(null, [a, b]);
}

console.log(multiplyNumbers(5, 10)); 