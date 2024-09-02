"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
        console.log("Added \"".concat(book.getTitle(), "\" to the library."));
    };
    Library.prototype.borrowBook = function (bookId) {
        var book = this.books.find(function (b) { return b.getId() === bookId; });
        if (book) {
            book.borrowBook();
        }
        else {
            console.log("Book with ID ".concat(bookId, " not found."));
        }
    };
    Library.prototype.returnBook = function (bookId) {
        var book = this.books.find(function (b) { return b.getId() === bookId; });
        if (book) {
            book.returnBook();
        }
        else {
            console.log("Book with ID ".concat(bookId, " not found."));
        }
    };
    Library.prototype.listBooks = function () {
        this.books.forEach(function (book) { return book.getItemDetails(); });
    };
    return Library;
}());
exports.Library = Library;
