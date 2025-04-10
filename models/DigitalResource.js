import EBook from "./EBook.js";
import PrintedBook from "./PrintedBook.js";

class DigitalResource {
    constructor() {
        this.Ebook = new EBook();
        this.PrintedBook = new PrintedBook();
        this.downloaded = false;
    }

    download() {
        this.downloaded = true;
        console.log('Resources downloaded!');
    }

    access() {
        if (this.downloaded) {
            console.log('You have permission to access.');
        } else {
            console.log('You do not have permission to access. Download resources to access.');
        }
    }
}

export default DigitalResource;
