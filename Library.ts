import { BookItem } from './BookItem';

export class Library {
    private books: BookItem[] = [];

    addBook(book: BookItem): void {
        this.books.push(book);
        console.log(`Added "${book.getTitle()}" to the library.`);
    }

    borrowBook(bookId: number): void {
        const book = this.books.find(b => b.getId() === bookId);
        if (book) {
            book.borrowBook();
        } else {
            console.log(`Book with ID ${bookId} not found.`);
        }
    }

    returnBook(bookId: number): void {
        const book = this.books.find(b => b.getId() === bookId);
        if (book) {
            book.returnBook();
        } else {
            console.log(`Book with ID ${bookId} not found.`);
        }
    }

    listBooks(): void {
        this.books.forEach(book => book.getItemDetails());
    }
}
