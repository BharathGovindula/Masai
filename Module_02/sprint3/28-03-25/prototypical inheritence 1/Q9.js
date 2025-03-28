// You are developing a basic person management system. Implement this system using constructor functions and prototypical inheritance.

// Create a constructor function Person with properties:

// name (string): name of the person
// age (number): age of the person
// Add a method introduce to Person.prototype that logs:

// "Hi, my name is [name] and I am [age] years old."
// Create a constructor function Employee that inherits from Person and adds:

// jobTitle (string): job title of the employee
// Add a method work to Employee.prototype that logs:

// "[name] is working as a [jobTitle]."
// Demonstration
// Create an instance of Person.
// Create an instance of Employee.
// Call introduce on both instances.
// Call work on the Employee instance.






// Constructor function for Person
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding introduce method to Person prototype
Person.prototype.introduce = function () {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
};

// Constructor function for Employee inheriting from Person
function Employee(name, age, jobTitle) {
    Person.call(this, name, age); // Call the Person constructor
    this.jobTitle = jobTitle;
}

// Setting up prototype inheritance
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Adding work method to Employee prototype
Employee.prototype.work = function () {
    console.log(`${this.name} is working as a ${this.jobTitle}.`);
};

// Demonstration
const person1 = new Person("Alice", 30);
const employee1 = new Employee("Bob", 40, "Software Engineer");

person1.introduce(); // Hi, my name is Alice and I am 30 years old.
employee1.introduce(); // Hi, my name is Bob and I am 40 years old.
employee1.work(); // Bob is working as a Software Engineer.
