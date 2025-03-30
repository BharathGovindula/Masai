async function fetchProducts() {
    const response = await fetch('https://fakestoreapi.com/products');
    return response.json();
}

async function calculateDiscountedTotal() {
    const products = await fetchProducts();
    
    const totalPrice = products.reduce((total, product) => {
        const title = product.title.toLowerCase();
        
        
    }, 0);
    
   
}

calculateDiscountedTotal();
