class User {
    constructor(ID, name, address, contactInfo) {
        this._ID = ID;
        this._name = name;
        this._address = address;
        this._contactInfo = contactInfo;
        this._listOfBooks = [];
        this._historyOfBooks = [];
    }

    addBook(book) {
        this._listOfBooks.push(book);
        this._historyOfBooks.push(book);
        console.log('Book Added');
    }

    deleteBook(book) {
        this._listOfBooks = this._listOfBooks.filter(b => b !== book);
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
            console.log('list is empty');
        }
    }
}


export default User;
