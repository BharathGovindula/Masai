// app.js
import Book from './book.js';
import Member from './member.js';
import PremiumMember from './premiumMember.js';

// Creating book objects
const book1 = new Book("The Hobbit", "J.R.R. Tolkien");
const book2 = new Book("1984", "George Orwell");
const book3 = new Book("To Kill a Mockingbird", "Harper Lee");
const book4 = new Book("Moby-Dick", "Herman Melville");
const book5 = new Book("The Great Gatsby", "F. Scott Fitzgerald");

// Creating a regular member
const member1 = new Member("Alice");

// Creating a premium member
const premiumMember1 = new PremiumMember("Bob");

// Demonstrating borrowing books
member1.borrowBook(book1); // Alice borrows "The Hobbit"
member1.borrowBook(book2); // Alice borrows "1984"
member1.borrowBook(book3); // Alice borrows "To Kill a Mockingbird"
member1.borrowBook(book4); // Alice cannot borrow more than 3 books

premiumMember1.borrowBook(book4); // Bob borrows "Moby-Dick"
premiumMember1.borrowBook(book5); // Bob borrows "The Great Gatsby"
premiumMember1.borrowBook(book1); // Bob cannot borrow "The Hobbit" (already borrowed)
premiumMember1.borrowBook(book2); // Bob borrows "1984"
premiumMember1.borrowBook(book3); // Bob borrows "To Kill a Mockingbird"
premiumMember1.borrowBook(book5); // Bob cannot borrow more than 5 books

// Using bind to create a bound function for borrowing books
const borrowForAlice = member1.borrowBook.bind(member1, book5);
borrowForAlice(); // Alice cannot borrow more than 3 books
