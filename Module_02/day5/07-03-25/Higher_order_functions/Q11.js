function processProducts(products) {
    // Extract product names using map()
    const productNames = products.map(product => product.name);

    // Iterate over the products and log messages based on the price
    products.forEach(product => {
        if (product.price > 50) {
            console.log(`${product.name} is above $50`);
        } else {
            console.log(`${product.name} is below $50`);
        }
    });

    return productNames;
}


const products = [{ name: "Battery", price: 1000 }, { name: "Mouse", price: 20 }];
processProducts(products);
