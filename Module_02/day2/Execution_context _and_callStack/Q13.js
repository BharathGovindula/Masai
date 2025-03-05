// You must correct a script that is intended to handle calculations for a small e-commerce checkout system. The script includes functions using ES6 syntax but suffers from issues related to type coercion and syntax errors.

// Code Sample:

// const checkout = {

// items: [],

// total: 0,

// addItem(item) {

// if (typeof item.price !== 'number' || isNaN(item.price)) {

// console.log("Invalid price.");

// return;

// }

// this.items.push(item);

// this.total += item.price;

// },

// getTotal() {

// return Total: $${parseFloat(this.total).toFixed(2)}; } };

// checkout.addItem({ name: "Coffee Maker", price: "99.95" });

// checkout.addItem({ name: "Milk", price: 3.50 });

// console.log(checkout.getTotal()); // Expected issue !

// Steps:

// Identify and correct the type coercion that incorrectly handles the price as a string.
// Refactor the addItem method to ensure that it correctly validates and adds only items with valid numerical prices.
// Fix any ES6 syntax errors and ensure the output format is consistent.

const checkout = {
    items: [],
    total: 0,

    addItem(item) {
        if (!item || typeof item.price !== 'number' || isNaN(item.price)) {
            console.log("Error: Invalid price. Please enter a valid number.");
            return;
        }

        this.items.push(item);
        this.total += item.price;
        console.log(`Success: "${item.name}" added to cart. Price: $${item.price.toFixed(2)}`);
    },

    getTotal() {
        return `Total: $${this.total.toFixed(2)}`;
    }
};

// Testing the system
checkout.addItem({ name: "Coffee Maker", price: parseFloat("99.95") }); // Fixing price type
checkout.addItem({ name: "Milk", price: 3.50 });
checkout.addItem({ name: "Tea", price: "4.50" }); // Invalid price (string)
checkout.addItem({ name: "Bread", price: NaN }); // Invalid price (NaN)

console.log(checkout.getTotal()); // Correct total output



// Fixes and Improvements:
// Fixed Type Coercion Issue:

// checkout.addItem({ name: "Coffee Maker", price: "99.95" }) originally passed price as a string.
// Fixed by converting it with parseFloat("99.95") before adding it.
// Better Validation in addItem:

// Prevents NaN and non-numeric values from being added.
// Ensures price is a valid number before processing.
// Fixed getTotal() Syntax Error:

// The original return Total: $${parseFloat(this.total).toFixed(2)}; had syntax issues.
// Fixed by correctly formatting the return string using template literals.
// Added Success/Error Messages:

// Each addItem call provides feedback on whether the item was added or rejected.