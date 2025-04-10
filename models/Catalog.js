import book from "./Book.js";
import EBook from "./EBook.js";
import PrintedBook from "./PrintedBook.js";
import DigitalResource from "./DigitalResource.js";
import Book from "./Book.js";

class Catalog {
    constructor(listOfBooks) {
        this.EBook = new EBook()
        this._listOfBooks = listOfBooks || []
        this.digital= new DigitalResource()
    }

    addBook(ID, name, author, ISBN, genre, yearOfProduction, numOfCopies) {
        const newBook =  new Book(ID, name, author, ISBN, genre, yearOfProduction, numOfCopies)
        this._listOfBooks.push(newBook)
        console.log('Book added!')
    }
    addPrintedBook(ID, name, author, ISBN, genre, yearOfProduction){
        if(this.digital.downloaded === true){
            const printedBook = new PrintedBook(ID, name, author, ISBN, genre, yearOfProduction)
            this._listOfBooks.push(printedBook)
        } else {
            console.log(`You dont have permission to add ebooks!`)
        }
    }

    downloadResource(){
        this.digital.download()
    }
    isAccess(){
        this.digital.access()
    }

    addEbook(ID, name, author, ISBN, genre, yearOfProduction, numOfCopies, fileFormat, fileSize) {
        if(this.digital.downloaded === true){
           const ebook = new EBook(ID, name, author, ISBN, genre, yearOfProduction, numOfCopies, fileFormat, fileSize)
            this._listOfBooks.push(ebook)
        } else {
            console.log(`You dont have permission to add ebooks!`)
        }
    }
    removeBook(bookName) {
        const index = this._listOfBooks.findIndex(item => item._name === bookName);  // використовуємо findIndex
        if (index !== -1) {
            this._listOfBooks.splice(index, 1);
            console.log(`Book "${bookName}" successfully removed!`);  // виправлення логування
        } else {
            console.log(`Book "${bookName}" not found!`);
        }
    }


    searchBook(criteria, value) {
        const foundBooks = this._listOfBooks.filter(book => {
            const bookValue = book[`_${criteria.toLowerCase()}`];
            return bookValue && bookValue.toLowerCase().includes(value.toLowerCase());
        });

        if (foundBooks.length > 0) {
            console.log(`Found books by criteria ${criteria}:`, foundBooks);
        } else if(foundBooks.length < 1) {
            console.log("value must have at least one letter");
        }
        else {
            console.error('No books found matching the criteria');
        }
    }
}

export default Catalog;

