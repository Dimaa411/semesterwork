class Search {
    constructor(books, criteria = {}) {
        this.books = books;
        this.criteria = criteria;
    }


    searchByName() {
        const name = this.criteria.name;
        if (name) {
            const result = this.books.filter(book =>
                book._name && book._name.toLowerCase().includes(name.toLowerCase())
            );
            return result.length > 0 ? result : 'Нічого не знайдено за назвою';
        }
        return 'Нічого не знайдено за критерієм назви';
    }

    searchByAuthor() {
        const author = this.criteria.author;
        if (author) {
            const result = this.books.filter(book =>
                book._author && book._author.toLowerCase().includes(author.toLowerCase())
            );
            return result.length > 0 ? result : 'Нічого не знайдено за автором';
        }
        return 'Нічого не знайдено за критерієм автора';
    }


    searchByGenre() {
        const genre = this.criteria.genre;
        if (genre) {
            const result = this.books.filter(book =>
                book._genre && book._genre.toLowerCase().includes(genre.toLowerCase())
            );
            return result.length > 0 ? result : 'Нічого не знайдено за жанром';
        }
        return 'Нічого не знайдено за критерієм жанру';
    }


    searchByYear() {
        const year = this.criteria.year;
        if (year) {
            const result = this.books.filter(book => book._yearOfProduction === year);
            return result.length > 0 ? result : 'Нічого не знайдено за роком видання';
        }
        return 'Нічого не знайдено за критерієм року видання';
    }


    sortBooks() {
        const { sortBy = 'name', sortOrder = 'asc' } = this.criteria;
        return this.books.sort((a, b) => {
            let comparison = 0;

            if (sortBy === 'name') {
                comparison = a._name.localeCompare(b._name);
            } else if (sortBy === 'author') {
                comparison = a._author.localeCompare(b._author);
            } else if (sortBy === 'year') {
                comparison = a._yearOfProduction - b._yearOfProduction;
            }

            return sortOrder === 'asc' ? comparison : -comparison;
        });
    }
}

export default Search;
