// book.js
// Constructor function for creating a Book object
function Book(title, author, isAvailable = true) {
    this.title = title;
    this.author = author;
    this.isAvailable = isAvailable;
}

// Exporting the Book constructor
export default Book;
