import { Library } from './Library';
import { BookItem } from './BookItem';

const myLibrary = new Library();

// Create some books
const book1 = new BookItem(1, '1984', 'George Orwell');
const book2 = new BookItem(2, 'To Kill a Mockingbird', 'Harper Lee');
const book3 = new BookItem(3, 'sample', 'akshay');

// Add books to the library
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);

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
