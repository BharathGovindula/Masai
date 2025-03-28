// books.js
import Book from './book.js'; // Importing the Book constructor

// Creating an array of book instances
const books = [
    new Book("To Kill a Mockingbird", "Harper Lee", 1960),
    new Book("1984", "George Orwell", 1949),
    new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925),
    new Book("Moby-Dick", "Herman Melville", 1851)
];

// Exporting the array of books
export default books;
