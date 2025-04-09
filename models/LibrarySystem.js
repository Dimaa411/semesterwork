import Catalog from "./Catalog.js";
import User from "./User.js";
import Transactions from "./Transactions.js";
import Notifications from "./Notifications.js";
import Report from "./Report.js";
import EventManager from "./EventManager.js";

class LibrarySystem {
    constructor() {
        this.catalog = new Catalog();
        this.users = [];
        this.transactions = [];
        this.notifications = [];
        this.eventManager = new EventManager(this.users); // 🔗 інтеграція
    }

    registerUser(ID, name, address, contactInfo) {
        const user = new User(ID, name, address, contactInfo);
        this.users.push(user);
        console.log(`User ${name} successfully registered!`);
        return user;
    }

    registerEventsUser(ID, name, address, contactInfo) {
       this.eventManager.registerEventsUser(ID, name, address, contactInfo);
    }


    createEvent(eventName, address, eventCategory, date, users = []) {
        this.eventManager.createEvent(eventName, address, eventCategory, date, users);
    }

    registerToEvent(eventName, userName) {
        this.eventManager.registerToEvent(eventName, userName);
    }

    getEventsInfo() {
        this.eventManager.getEventsInfo();
    }

    sendEventInvitations() {
        this.eventManager.sendMessage();
    }

    deleteUser(user) {
        this.users = this.users.filter(u => u._name !== user._name);
        this.eventManager.users = this.eventManager.users.filter(u => u._name !== user._name);
        console.log(user._name, `has been deleted.`);
    }

    issueBook(user, bookID) {
        const book = this.catalog._listOfBooks.find(b => b._ID === bookID);
        if (!book) {
            console.error(`Book with ID ${bookID} not found!`);
            return;
        }

        const transaction = Transactions.createTransaction(this.transactions.length + 1, user, book);
        this.transactions.push(transaction);
        user.addBook(book);

        console.log(`Book "${book._name}" issued to ${user._name}`);
    }

    returnBook(user, bookID) {
        const transaction = this.transactions.find(
            t => t.user === user && t.book._ID === bookID && t.status === 'issued'
        );

        if (!transaction) {
            console.error(`No active transaction found for book ID ${bookID}`);
            return;
        }

        transaction.updateStatus("returned");
        user._listOfBooks = user._listOfBooks.filter(b => b._ID !== bookID);

        console.log(`Book "${transaction.book._name}" returned by ${user._name}`);
    }

    generateReport() {
        console.log("Library Report");
        console.log(`Period: ${new Date().toLocaleDateString()}`);

        console.log("\nBooks in Catalog:");
        this.catalog._listOfBooks.forEach(book => {
            console.log(` - ${book._name} by ${book._author} (${book._yearOfProduction})`);
        });

        console.log("\nTransactions:");
        this.transactions.forEach(tr => {
            console.log(` - ${tr.user._name} took "${tr.book._name}" on ${tr.issueDate.toLocaleDateString()} [${tr.status}]`);
        });

        console.log("\nRegistered Users:");
        this.users.forEach(user => {
            console.log(` - ${user._name} (${user._contactInfo})`);
        });
    }

    checkOverdueBooks() {
        this.users.forEach(user => {
            const userTransactions = this.transactions.filter(t => t.user === user && t.status === 'issued');
            const overdueBooks = userTransactions.filter(t => t.isOverdue());

            if (overdueBooks.length > 0) {
                const message = `User ${user._name}, you have overdue books!`;
                const notification = new Notifications(user, message, "sent");
                this.notifications.push(notification);
                console.error(message);
            }
        });
    }

}

export default LibrarySystem;
