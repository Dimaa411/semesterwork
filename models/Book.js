class Book {
    constructor(ID, name, author, ISBN, genre, yearOfProduction, numOfCopies) {
        this._ID = ID;  // Приватне поле
        this._name = name;
        this._author = author;
        this._ISBN = ISBN;
        this._genre = genre;
        this._yearOfProduction = yearOfProduction;
        this._numOfCopies = numOfCopies;
    }

    getInfo() {
        console.log(`Information about book: \nId: ${this._ID}, Name: ${this._name}, Author: ${this._author}, 
        ISBN: ${this._ISBN}, Genre: ${this._genre}, Year of Production: ${this._yearOfProduction}, 
        Num of Copies: ${this._numOfCopies}`);
    }

    updateCopies(num) {
        if (num) {
            this._numOfCopies = 0;
            this._numOfCopies += num;
            console.log(`Number of copies was updated to ${this._numOfCopies}`);
        }
    }
}

export default Book;