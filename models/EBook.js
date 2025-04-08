import Book from "./Book.js";

class EBook extends Book {
    constructor(ID, name, author, ISBN, genre, yearOfProduction, numOfCopies, fileFormat, fileSize) {
        super(ID, name, author, ISBN, genre, yearOfProduction, numOfCopies);
        this.fileFormat = fileFormat;
        this.fileSize = fileSize;
    }

    getInfo() {
        super.getInfo()
        console.log(`        File format: ${this.fileFormat}, File size: ${this.fileSize}`);
    }


}

export default EBook
