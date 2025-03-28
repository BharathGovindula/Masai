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
