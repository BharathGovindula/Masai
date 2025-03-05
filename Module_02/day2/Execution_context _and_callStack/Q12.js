// You have been provided with a script that is intended to handle a system for tracking book collections in a small library. The script uses arrays and objects to manage information but contains logical errors and syntax misuse, especially around ES6 features.

// Code Sample:

// const library = {

// books: [{ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }],

// addBook(book) {

// if (!book.title || !book.author || !book.year) {

// console.log("Book information is incomplete.");

// return;

// }
// this.books.push(book);

// },

// findBookByTitle(title) {

// return this.books.find(book => book.title === title);

// },

// removeBook(title) {

// const index = this.books.findIndex(book => book.title === title);

// if (index !== -1) {

// this.books.splice(index, 1);

// } else {

// console.log("Book not found.");

// } } };

// library.addBook({ author: "George Orwell", year: 1949 });

// console.log(library.books.length);

// Steps:

// Debug and improve the addBook method to ensure all books added are valid and fully specified.
// Read about the methods provided above in MDN
// Review and correct the output of the system based on operations performed.
// Refactor the code for better error handling and data integrity.


const library = {
    books: [{ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }],

    addBook(book) {
        if (!book.title || !book.author || !book.year) {
            console.log("Error: Missing book details. Please provide title, author, and year.");
            return;
        }

        // Check if the book already exists
        let existingBook = this.books.find(b => b.title === book.title);
        if (existingBook) {
            console.log(`Error: The book "${book.title}" is already in the library.`);
            return;
        }

        this.books.push(book);
        console.log(`Success: "${book.title}" has been added.`);
    },

    findBookByTitle(title) {
        return this.books.find(book => book.title === title) || null;
    },

    removeBook(title) {
        let index = this.books.findIndex(book => book.title === title);

        if (index !== -1) {
            this.books.splice(index, 1);
            console.log(`Success: "${title}" has been removed.`);
        } else {
            console.log(`Error: Book "${title}" not found.`);
        }
    }
};

// Testing the system
library.addBook({ title: "1984", author: "George Orwell", year: 1949 });  // Adds the book
library.addBook({ author: "J.K. Rowling", year: 1997 });  // Error: Missing title
library.addBook({ title: "1984", author: "George Orwell", year: 1949 });  // Error: Duplicate book

library.removeBook("The Hobbit");  // Removes "The Hobbit"
library.removeBook("Unknown Book");  // Error: Book not found

console.log(library.books);  // Shows the updated book list
