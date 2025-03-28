// Define the Animal constructor function
function Animal() {
    this.type = "Animal";
}

// Add a method sound to Animal.prototype
Animal.prototype.sound = function() {
    console.log("Animal sound");
};

// Define the Dog constructor function that inherits from Animal
function Dog() {
    Animal.call(this); // Call the Animal constructor
    this.type = "Dog";
}

// Ensure Dog.prototype inherits from Animal.prototype
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Override the sound method in Dog.prototype
Dog.prototype.sound = function() {
    console.log("Bark");
};

// Create an instance of Dog
const myDog = new Dog();

// Call the sound method on myDog
myDog.sound(); // Output: "Bark"
