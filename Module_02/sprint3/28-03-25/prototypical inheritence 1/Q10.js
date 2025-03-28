// You are developing a simulation for a car rental service. The simulation should manage the inventory of cars, track rentals by customers, and handle the return and maintenance of cars. Additionally, there are different types of cars with varying rental rules and prices. The system should be able to process rentals asynchronously to simulate real-world delays.

// To implement this system, follow these steps:

// Create a constructor function for Car that takes the following parameters:
// make: the make of the car (e.g., Toyota)
// model: the model of the car (e.g., Corolla)
// year: the year of the car (e.g., 2020)
// isAvailable: a boolean indicating if the car is available for rent (default is true)
// Create a constructor function for Customer that takes the following parameters:
// name: the name of the customer
// rentedCars: an array to store the cars rented by the customer (default is an empty array)
// Add a method to the Customer prototype to allow customers to rent a car. This method should:
// Take a Car object as an argument.
// Check if the car is available.
// If the car is available, mark it as not available and add the car to the customer's rentedCars array.
// If the car is not available, log a message saying the car is already rented.
// Create a constructor function for PremiumCustomer that inherits from Customer and takes the same parameters. Additionally, PremiumCustomer should have:
// A discountRate property indicating a discount on rental prices (e.g., 10%).
// Create a function to calculate rental prices that considers:
// Base rental price per day (e.g., $50).
// Different rates for different car types (e.g., SUV, Sedan).
// Apply discounts for premium customers.
// Handle car returns by adding a method to the Customer prototype to return a car. This method should:
// Take a Car object as an argument.
// Mark the car as available.
// Remove the car from the customer's rentedCars array.
// Simulate a delay in processing the return (e.g., 2 seconds).
// Extend the system to handle maintenance:
// Create a Maintenance function that takes a Car object and a delay (in milliseconds).
// After the delay, mark the car as available.
// Demonstrate the functionality:
// Create several car objects of different types.
// Create regular and premium customers.
// Show renting and returning cars, applying discounts, and handling maintenance.
// Use call, apply, and bind where appropriate to demonstrate your understanding.




// Constructor function for Car
function Car(make, model, year, type) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.type = type;
    this.isAvailable = true;
}

// Constructor function for Customer
function Customer(name) {
    this.name = name;
    this.rentedCars = [];
}

// Method to rent a car
Customer.prototype.rentCar = function (car) {
    if (car.isAvailable) {
        car.isAvailable = false;
        this.rentedCars.push(car);
        console.log(`${this.name} rented a ${car.make} ${car.model}.`);
    } else {
        console.log(`${car.make} ${car.model} is already rented.`);
    }
};

// Method to return a car
Customer.prototype.returnCar = function (car) {
    const index = this.rentedCars.indexOf(car);
    if (index !== -1) {
        this.rentedCars.splice(index, 1);
        console.log(`${this.name} is returning ${car.make} ${car.model}...`);
        setTimeout(() => {
            car.isAvailable = true;
            console.log(`${car.make} ${car.model} is now available for rent.`);
        }, 2000);
    } else {
        console.log(`${this.name} does not have this car rented.`);
    }
};

// Constructor function for PremiumCustomer inheriting from Customer
function PremiumCustomer(name, discountRate) {
    Customer.call(this, name);
    this.discountRate = discountRate;
}

// Setting up prototype inheritance
PremiumCustomer.prototype = Object.create(Customer.prototype);
PremiumCustomer.prototype.constructor = PremiumCustomer;

// Function to calculate rental price
function calculateRentalPrice(car, days, customer) {
    const basePrice = 50;
    let rateMultiplier = 1;
    if (car.type === "SUV") rateMultiplier = 1.5;
    if (car.type === "Sedan") rateMultiplier = 1.2;

    let total = basePrice * rateMultiplier * days;
    if (customer instanceof PremiumCustomer) {
        total *= (1 - customer.discountRate);
    }
    return total;
}

// Function to handle maintenance
function Maintenance(car, delay) {
    console.log(`Maintenance started for ${car.make} ${car.model}.`);
    setTimeout(() => {
        car.isAvailable = true;
        console.log(`${car.make} ${car.model} is now available after maintenance.`);
    }, delay);
}

// Demonstration
const car1 = new Car("Toyota", "Corolla", 2020, "Sedan");
const car2 = new Car("Ford", "Explorer", 2019, "SUV");
const car3 = new Car("Honda", "Civic", 2021, "Sedan");

const customer1 = new Customer("Alice");
const premiumCustomer1 = new PremiumCustomer("Bob", 0.1);

customer1.rentCar(car1);
premiumCustomer1.rentCar(car2);

console.log(`Rental price for Bob: $${calculateRentalPrice(car2, 3, premiumCustomer1)}`);

customer1.returnCar(car1);

Maintenance(car3, 3000);
