class Transactions {
    constructor(id, user, book, issueDate) {
        this.id = id;
        this.user = user;
        this.book = book;
        this.issueDate = new Date(issueDate);
        this.returnDate = null;
        this.status = 'issued';
    }

    static createTransaction(ID, user, book) {
        return new Transactions(ID, user, book, new Date());
    }

    updateStatus(newStatus) {
        this.status = newStatus;
        if (newStatus === 'returned') {
            this.returnDate = new Date();
        }
    }

    isOverdue() {
        const dueDate = new Date(this.issueDate);
        dueDate.setDate(dueDate.getDate() + 7);

        console.log(`Book was taken on: ${this.issueDate.toLocaleDateString()}`);
        console.log(`Return by: ${dueDate.toLocaleDateString()}`);

        return !this.returnDate && new Date() > dueDate;
    }
}

export default Transactions;
