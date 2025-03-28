// member.js
function Member(name) {
    this.name = name;
    this.borrowedBooks = []; // Stores borrowed book titles
}

// Adding a borrowBook method to the Member prototype
Member.prototype.borrowBook = function (book) {
    if (!book.isAvailable) {
        console.log(`${book.title} is already borrowed.`);
        return;
    }

    if (this.borrowedBooks.length >= 3) {
        console.log(`${this.name} cannot borrow more than 3 books.`);
        return;
    }

    book.isAvailable = false; // Mark book as borrowed
    this.borrowedBooks.push(book.title);
    console.log(`${this.name} borrowed "${book.title}".`);
};

// Exporting the Member constructor
export default Member;
