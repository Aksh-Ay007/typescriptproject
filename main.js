"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Library_1 = require("./Library");
var BookItem_1 = require("./BookItem");
var myLibrary = new Library_1.Library();
// Create some books
var book1 = new BookItem_1.BookItem(1, '1984', 'George Orwell');
var book2 = new BookItem_1.BookItem(2, 'To Kill a Mockingbird', 'Harper Lee');
// Add books to the library
myLibrary.addBook(book1);
myLibrary.addBook(book2);
// List all books
console.log("\nListing all books:");
myLibrary.listBooks();
// Borrow a book
console.log("\nBorrowing book ID 1:");
myLibrary.borrowBook(1);
// Try to borrow the same book again
console.log("\nBorrowing book ID 1 again:");
myLibrary.borrowBook(1);
// Return the book
console.log("\nReturning book ID 1:");
myLibrary.returnBook(1);
// Try to return the same book again
console.log("\nReturning book ID 1 again:");
myLibrary.returnBook(1);
// List all books after operations
console.log("\nListing all books after borrowing and returning:");
myLibrary.listBooks();
