// book.js
// Constructor function to create a Book object
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

// Adding a method to the prototype to get a summary of the book
Book.prototype.getSummary = function () {
    return `${this.title} by ${this.author}, published in ${this.year}`;
};

// Exporting the Book constructor to be used in other files
export default Book;
