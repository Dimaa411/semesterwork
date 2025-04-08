import Transactions from "./Transactions.js";
import User from "./User.js";
class Notifications {
    constructor(user,message,status) {
        this.user = user;
        this.message = message;
        this.status = 'default';
    }

    reminder(transactions) {
        const overdueBooks = transactions.filter(t => t.user === this.user && t.isOverdue());

        if (overdueBooks.length > 0) {
            console.error(`You have overdue books!`);
            this.updateStatus('Sent')
        } else {
            console.log(`You don't have overdue books!`);
            this.updateStatus('Sent')
        }
    }
    updateStatus(newStatus) {
        this.status = newStatus;

    }
}


export default Notifications;
