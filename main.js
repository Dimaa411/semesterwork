import Book from "./models/Book.js";
import User from "./models/User.js";
import Librarian from "./models/Librarian.js";
import Catalog from "./models/Catalog.js";
import Transactions from "./models/Transactions.js";
import Report from "./models/Report.js";
import Notifications from "./models/Notifications.js";
import Search from "./models/Search.js";
import LibrarySystem from "./models/LibrarySystem.js";
import EBook from "./models/EBook.js";

// Створюємо книги
const book1 = new Book(1, 'The Great Gatsby', 'F. Scott Fitzgerald', '9780743273565', 'Fiction', 1925, 3);
const book2 = new Book(2, '1984', 'George Orwell', '9780451524935', 'Dystopian', 1949, 5);
const book3 = new Book(3, 'Moby Dick', 'Herman Melville', '9781503280786', 'Adventure', 1851, 2);

// Створюємо користувача і бібліотекаря
const user1 = new User(1, "Dima", "Konovaltsya 35", "+380688372701");
const librarian1 = new Librarian(1, "Vasya", "Konovaltsya 231", "+453543645645", "boss", "hight");

// Створюємо каталог
const catalog = new Catalog([book1, book2, book3]);

// Бібліотекар видає книгу користувачеві
librarian1.giveBook(book3, user1);

// Створюємо транзакції для користувача
const transactions = [
    Transactions.createTransaction(1, user1, book1),
    Transactions.createTransaction(2, user1, book2)
];

// Примусово змінюємо дату, щоб зробити книгу простроченою
transactions[0].issueDate = new Date("2025-03-15"); // Ця буде прострочена
transactions[1].issueDate = new Date("2025-04-25"); // Ця ще в терміні

// Перевіряємо, чи є прострочені книги
const notification = new Notifications(user1);
notification.reminder(transactions);

// Користувач повертає книгу
transactions[0].updateStatus("returned");

// Генеруємо звіт
const data = [
    { name: "Book A", author: "Author 1", copies: 3 },
    { name: "Book B", author: "Author 2", copies: 5 }
];
const report1 = new Report("Books Report", "2/31/2025-3/31/2025", data);

report1.generateReport();
report1.export('csv');
report1.export('json');

const books = [
    book1,book2,book3,
]
const search = new Search(books, {
    name: '1984',
});
console.log('------------------------------------------')
// Виконуємо пошук за назвою
console.log('за імененм')
const searchResultsByName = search.searchByName();
console.log(searchResultsByName);

// Виконуємо пошук за автором

// Сортуємо книги за автором
console.log('----------')
const sortedBooks = search.sortBooks();
console.log(sortedBooks)
console.log('=============')
const library = new LibrarySystem();

// Додавання книг до каталогу
library.catalog.addBook({ _ID: 4, _name: "1984", _author: "George Orwell" });
library.catalog.addBook({ _ID: 5, _name: "Brave New World", _author: "Aldous Huxley" });


const user3 = library.registerUser(1, "Alice", "123 Street", "alice@example.com");
const user4 = library.registerUser(2, "Bob", "456 Avenue", "bob@example.com");

// Видача книги
library.issueBook(user3, 4);
library.issueBook(user4, 5);

console.log('Повернення книги')
library.returnBook(user3, 4);

// Генерація звіту
console.log('звіт')
library.generateReport();

console.log('пеевірка на простроченість')
library.checkOverdueBooks();


let ebook;
ebook = new EBook(1, 'The Great Gatsby', 'F. Scott Fitzgerald', '9780743273565', 'Fiction', 1925, 3,'png','25mb');
ebook.getInfo()

library.deleteUser(user4)
library.generateReport()


