function processOrder(orderId, callback) {
    setTimeout(() => {
        callback(orderId);
    }, 3000);
}

// Example Usage
processOrder(101, (id) => console.log(`Order ${id} processed successfully!`));
