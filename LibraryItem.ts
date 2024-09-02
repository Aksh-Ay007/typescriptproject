export abstract class LibraryItem {
    private id: number;
    private title: string;

    constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
    }

    abstract getItemDetails(): void;

    getId(): number {
        return this.id;
    }

    getTitle(): string {
        return this.title;
    }
}
