// ** Order Processing System (Callback & setTimeout)**\n \n An online store needs to process orders. When an order is placed, it should take 3 seconds to process before calling a callback function to confirm.\n \n Task:\n \n

// Implement processOrder(orderId, callback).\n
// Use setTimeout to delay processing by 3 seconds.\n
// Call the callback with orderId once processed.\n \n Example Usage:\n \n
// processOrder(101, (id) => console.log(`Order ${id} processed successfully!`));\n
// \n
// // After 3s -> "Order 101 processed successfully!"\n
// \n
// ```\n
// \n
// \n
// \n
// **Problem: Working with FakeStoreAPI Data**\n
// \n
// You need to **fetch product data** from [FakeStoreAPI](https://fakestoreapi.com/products) and store it in a `data` variable. After fetching, implement the following functions to process the data:\n
// \n
// **1. Search for a Product**\n
// \n
// Create a function `searchProduct(query)` that:\n
// \n
// - Takes a **search query (query)** as input.\n
// - **Checks** if a product with that **title** exists in `data`.\n
// - If found, **print the product details**; otherwise, print `"Product not found"`.\n
// \n
//  **Example:**\n
// \n
// ```\n
// searchProduct("Fjallraven Backpack");\n
// \n
// ```\n
// \n
// **Output (if exists):**\n
// \n
// ```json\n
// { id: 1, title: "Fjallraven Backpack", price: 109.95, ... }\n
// \n
// ```\n
// \n
// Else:\n
// \n
// ```\n
// "Product not found"\n
// \n
// ```\n
// \n
// ---\n
// \n
// **2. Total Price of Electronics**\n
// \n
// Create a function `calculateElectronicsTotal()` that:\n
// \n
// - **Filters** only the `"electronics"` category.\n
// - Uses **reduce** to sum up the prices of all electronics.\n
// - Returns the **final total price**.\n
// \n
// **Example Usage:**\n
// \n
// ```\n
// console.log(calculateElectronicsTotal());\n
// \n
// ```\n
// \n
// **Expected Output:**\n
// \n
// ```\n
// Final electronics price: 1299.99\n
// \n
// ```\n
// \n
// *(Depends on FakeStoreAPI data)*\n
// \n
// ---\n
// \n
// **3. Sort Products by Title**\n
// \n
// Create a function `sortProductsByTitle()` that:\n
// \n
// - Sorts `data` by **title** in **alphabetical order** using `localeCompare()`.\n
// - Prints the sorted array.\n
// \n
// **Example Usage:**\n
// \n
// ```\n
// sortProductsByTitle();\n
// \n
// ```\n
// \n
// **Expected Output:** *(Sorted by title alphabetically)*\n
// \n
// ```json\n
// [\n
//  { "id": 4, "title": "Apple AirPods", ... },\n
//  { "id": 2, "title": "Blue Shirt", ... },\n
//  { "id": 1, "title": "Fjallraven Backpack", ... }\n
// ]\n
// \n
// ```\n
// \n
// ---\n
// \n
// **4. Discount on Products Containing 'aa'**\n
// \n
// Create a function `calculateDiscountedTotal()` that:\n
// \n
// - Uses **reduce** to **calculate the total price** of all products.\n
// - Applies a **10% discount** to products where the **title contains two 'a' characters** (case-insensitive).\n
// - Returns the **final discounted price**.\n
// \n
// **Example Usage:**\n
// \n
// ```\n
// console.log(calculateDiscountedTotal());\n
// \n
// ```\n
// \n
// **Expected Output:**\n
// \n
// ```\n
// Final price after discount: 1123.50\n
// \n
// ```\n
// \n
// *(Depends on FakeStoreAPI data)*\n
// \n
// ---\n
// \n
// Submission Guidelines\n
// \n
// - Submit your github repo link .\n