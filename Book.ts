export class Book {
    private title: string;
    private author: string;
    private isBorrowed: boolean;

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
        this.isBorrowed = false;
    }

    borrowBook(): void {
        if (this.isBorrowed) {
            console.log(`The book "${this.title}" is already borrowed.`);
        } else {
            this.isBorrowed = true;
            console.log(`You borrowed "${this.title}".`);
        }
    }

    returnBook(): void {
        if (this.isBorrowed) {
            this.isBorrowed = false;
            console.log(`You returned "${this.title}".`);
        } else {
            console.log(`The book "${this.title}" was not borrowed.`);
        }
    }

    getTitle(): string {
        return this.title;
    }

    getAuthor(): string {
        return this.author;
    }
}
