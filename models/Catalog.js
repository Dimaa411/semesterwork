import book from "./Book.js";

class Catalog {
    constructor(listOfBooks) {
        this._listOfBooks = listOfBooks || []
    }
    addBook(book) {
        this._listOfBooks.push(book);
        console.log('Book added!')
    }
    removeBook(book) {
        this._listOfBooks.filter(book => book !== book)
    }
    searchBook(criteria, value) {
        const foundBooks = this._listOfBooks.filter(book => {
            const bookValue = book[`_${criteria.toLowerCase()}`];
            return bookValue && bookValue.toLowerCase().includes(value.toLowerCase());
        });

        if (foundBooks.length > 0) {
            console.log(`Found books by criteria ${criteria}:`, foundBooks);
        } else {
            console.error('No books found matching the criteria');
        }
    }
}

export default Catalog;
