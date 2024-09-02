"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookItem = void 0;
var LibraryItem_1 = require("./LibraryItem");
var BookItem = /** @class */ (function (_super) {
    __extends(BookItem, _super);
    function BookItem(id, title, author) {
        var _this = _super.call(this, id, title) || this;
        _this.author = author;
        _this.isBorrowed = false;
        return _this;
    }
    BookItem.prototype.borrowBook = function () {
        if (this.isBorrowed) {
            console.log("The book \"".concat(this.getTitle(), "\" is already borrowed."));
        }
        else {
            this.isBorrowed = true;
            console.log("You borrowed \"".concat(this.getTitle(), "\"."));
        }
    };
    BookItem.prototype.returnBook = function () {
        if (this.isBorrowed) {
            this.isBorrowed = false;
            console.log("You returned \"".concat(this.getTitle(), "\"."));
        }
        else {
            console.log("The book \"".concat(this.getTitle(), "\" was not borrowed."));
        }
    };
    BookItem.prototype.getItemDetails = function () {
        console.log("Book ID: ".concat(this.getId(), ", Title: ").concat(this.getTitle(), ", Author: ").concat(this.author));
    };
    return BookItem;
}(LibraryItem_1.LibraryItem));
exports.BookItem = BookItem;
