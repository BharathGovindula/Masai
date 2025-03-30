async function calculateElectronicsTotal() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        
        const total = products
            .filter(product => product.category === "electronics")
            .reduce((sum, product) => sum + product.price, 0);
        
        console.log(`Final electronics price: ${total.toFixed(2)}`);
        return total;
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

calculateElectronicsTotal();
