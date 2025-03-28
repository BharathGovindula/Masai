// premiumMember.js
import Member from './member.js';

function PremiumMember(name) {
    Member.call(this, name); // Inherit Member properties
    this.specialCollectionAccess = true; // Premium members get special privileges
}

// Inheriting Member's prototype
PremiumMember.prototype = Object.create(Member.prototype);
PremiumMember.prototype.constructor = PremiumMember;

// Overriding the borrowBook method to allow borrowing up to 5 books
PremiumMember.prototype.borrowBook = function (book) {
    if (!book.isAvailable) {
        console.log(`${book.title} is already borrowed.`);
        return;
    }

    if (this.borrowedBooks.length >= 5) {
        console.log(`${this.name} cannot borrow more than 5 books.`);
        return;
    }

    // Call the original borrowBook method using `call`
    Member.prototype.borrowBook.call(this, book);
};

// Exporting PremiumMember
export default PremiumMember;
