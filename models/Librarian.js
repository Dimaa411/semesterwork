import User from "./User.js";

class Librarian extends User {
    constructor(ID, name, address, contactInfo, position, levelOfAccess) {
        super(ID, name, address, contactInfo);
        this._position = position;
        this._levelOfAccess = levelOfAccess;
    }

    giveBook(book, user) {
        user.addBook(book);
        console.log('Book given to user');
    }
    getBook(book,user) {
        user.deleteBook(book);
        console.log('Book deleted');
    }
    addToCatalog(){}
}

export default Librarian;
