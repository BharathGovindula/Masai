// Write JavaScript code to achieve the following tasks:

// Define a constructor function Animal with a property type set to "Animal".
// Add a method sound to Animal.prototype that logs "Animal sound".
// Define a constructor function Dog that inherits from Animal.
// Ensure that Dog.prototype inherits from Animal.prototype.
// Override the sound method in Dog.prototype to log "Bark" instead of "Animal sound".
// Create an instance of Dog called myDog.
// Call the sound method on myDog.




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
