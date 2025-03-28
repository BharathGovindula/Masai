// app.js
import books from './books.js'; // Importing the array of book instances

// Using the map method to create an array of book summaries
const bookSummaries = books.map(book => book.getSummary());

// Logging the book summaries to the console
console.log(bookSummaries);
