"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibraryItem = void 0;
var LibraryItem = /** @class */ (function () {
    function LibraryItem(id, title) {
        this.id = id;
        this.title = title;
    }
    LibraryItem.prototype.getId = function () {
        return this.id;
    };
    LibraryItem.prototype.getTitle = function () {
        return this.title;
    };
    return LibraryItem;
}());
exports.LibraryItem = LibraryItem;
