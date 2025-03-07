function countCategories(categories) {
    // Step 1: Use reduce() to count occurrences of each category
    const categoryCount = categories.reduce((acc, category) => {
        acc[category] = (acc[category] || 0) + 1;
        return acc;
    }, {});

    return categoryCount;
}

// Extra Challenge: Sort categories by count in descending order
function sortedCategoriesByCount(categories) {
    const categoryCount = countCategories(categories);

    return Object.entries(categoryCount) // Convert object to array of key-value pairs
        .sort((a, b) => b[1] - a[1])    // Sort by count in descending order
        .map(entry => entry[0]);        // Extract only category names
}


const categories = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

console.log(countCategories(categories)); // Output: { electronics: 2, clothing: 2, toys: 3 }
console.log(sortedCategoriesByCount(categories)); // Output: ["toys", "electronics", "clothing"]
