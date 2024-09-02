import { LibraryItem } from './LibraryItem';

export class BookItem extends LibraryItem {
    private author: string;
    private isBorrowed: boolean;

    constructor(id: number, title: string, author: string) {
        super(id, title);
        this.author = author;
        this.isBorrowed = false;
    }

    borrowBook(): void {
        if (this.isBorrowed) {
            console.log(`The book "${this.getTitle()}" is already borrowed.`);
        } else {
            this.isBorrowed = true;
            console.log(`You borrowed "${this.getTitle()}".`);
        }
    }

    returnBook(): void {
        if (this.isBorrowed) {
            this.isBorrowed = false;
            console.log(`You returned "${this.getTitle()}".`);
        } else {
            console.log(`The book "${this.getTitle()}" was not borrowed.`);
        }
    }

    getItemDetails(): void {
        console.log(`Book ID: ${this.getId()}, Title: ${this.getTitle()}, Author: ${this.author}`);
    }
}
