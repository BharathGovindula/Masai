const data = [
    { id: 1, title: "Fjallraven Backpack", price: 109.95 },
    { id: 2, title: "Blue Shirt", price: 22.3 },
    { id: 4, title: "Apple AirPods", price: 199.99 }
  ];
  
  function sortProductsByTitle() {
    const sortedData = data.slice().sort((a, b) => a.title.localeCompare(b.title));
    console.log(sortedData);
  }
  
  sortProductsByTitle();
  