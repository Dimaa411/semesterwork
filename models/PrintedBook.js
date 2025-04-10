import Book from "./Book.js"

class PrintedBook extends Book {
    constructor(ID, name, author, ISBN, genre, yearOfProduction,printed) {
        super(ID, name, author, ISBN, genre, yearOfProduction);
        this.printed = 'printed';
    }
    getInfo() {
        super.getInfo()
        console.log(`        book: ${this.printed}`);
    }
}

export default PrintedBook