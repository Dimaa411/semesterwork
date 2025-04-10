import Book from "./Book.js";
import Catalog from "./Catalog.js";

class User {
    constructor(ID, name, address, contactInfo) {
        this._ID = ID;
        this._name = name;
        this._address = address;
        this._contactInfo = contactInfo;
        this._listOfBooks = [];
        this._historyOfBooks = [];
    }

    get name() {
        return this._name;
    }

    addBook(book) {
        this._listOfBooks.push(book);
        this._historyOfBooks.push(book);
        console.log('Book Added');
    }

    deleteBook(book) {
        const index = this._listOfBooks.find(item => item === book);
        if (index !== -1) {
            this._listOfBooks.splice(index, 1);
            console.log(`Book ${book}  successfully removed!`)
        }
    }

    historyOfPickedBooks() {
        if (this._historyOfBooks.length > 0) {
            console.log('History of picked books:', this._historyOfBooks);
        } else {
            console.log('History is empty');
        }
    }

    listOfBooks() {
        if (this._listOfBooks.length > 0) {
            console.log('List of Books', this._listOfBooks);
        } else {
            console.log('List is empty');
        }
    }

}

export default User;

