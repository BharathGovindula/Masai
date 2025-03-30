let data = [];

// Fetch product data from FakeStoreAPI
async function fetchData() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        data = await response.json();
        console.log("Data fetched successfully");
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}


function searchProduct(query) {
    const product = data.find(item => item.title.toLowerCase() === query.toLowerCase());
    
    if (product) {
        console.log(product);
    } else {
        console.log("Product not found");
    }
}


fetchData();
