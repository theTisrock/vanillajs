
// Book class (es5 style)
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// test
// const book = new Book("To Kill A Mockingbird", "Harper Lee", 999);

// mock data
// const mockingbird = new Book("To Kill A Mockingbird", "Harper Lee", 999);
// const moutain = new Book("My Side of the Mountain", "Jean Craighead George", 888);
// const drseuss = new Book("Green Eggs & Ham", "Dr. Suess", 777);

// ui
const bookForm = document.querySelector('#book-form');
const clearBooksBtn = document.querySelector('#clear-books');
const booksCollection = document.querySelector('#books-collection');


/* Local Storage */
class Store {
    /* Storage, retrieval and deletion of books is the responsibility of the application. Storage does not involve UI at all. */
    static getAll(storageKey) {  // getAll('books')
        let items;
        const itemsDontExist = localStorage.getItem(storageKey) === null;

        if (itemsDontExist) {
            items = [];
        } else {
            let itemsStr = localStorage.getItem(storageKey);
            items = JSON.parse(itemsStr);
        }

        return items;
    }

    static saveAll(storageKey, items) {
        let _items = JSON.stringify(items);
        localStorage.setItem(storageKey, _items);
    }

    /* static displayBooks() { 
        I don't feel that displaying books has anything to do with storage of them.
    } */
}


const app = {
    data: {
        books: [],
    },
    methods: {
        clearBooks: function() {
            app.data.books = [];
            Store.saveAll('books', app.data.books);
            refreshBookTable();
        },
        addBook: function(newBook) {
            app.data.books.push(newBook);
            Store.saveAll('books', app.data.books);
            refreshBookTable();
        },
        setBooks: function(books) {
            app.data.books = books;
            Store.saveAll('books', app.data.books);
            refreshBookTable();
        },
    },
    initialize: function() {
        app.data.books = Store.getAll('books');
        refreshBookTable();
    },
}


function clearAllBooksFromTable() {
    const tbody = document.querySelector('#books-collection');
    tbody.querySelectorAll('tr').forEach(function(tableDataEntry) {
        tableDataEntry.remove();
    });
}

function clearBookForm() {
    bookForm.querySelector('#title').value = "";
    bookForm.querySelector('#author').value = "";
    bookForm.querySelector('#isbn').value = "";

}


function refreshBookTable() {
    clearAllBooksFromTable();

    const books = app.data.books;  // app data
    const tbody = document.querySelector('#books-collection');  // acquire DOM section

    // for each entry in books list
    books.forEach(function(bookObject, index) {
        const row = document.createElement('tr');
        row.setAttribute('id', index);

        const title = document.createElement('td');
        title.textContent = bookObject.title;
        const author = document.createElement('td');
        author.textContent = bookObject.author;
        const isbn = document.createElement('td');
        isbn.textContent = bookObject.isbn;
        const delBtn = document.createElement('td');
        delBtn.innerHTML = `<button type="submit">delete</>`;

        row.appendChild(title);
        row.appendChild(author);
        row.appendChild(isbn);
        row.appendChild(delBtn);

        tbody.appendChild(row);
    });
}


/* events & listeners */
function onLoadEvent(event) {
    app.initialize();
}

function addBookEvent(event) {
    event.preventDefault();
    // extract data
    const title = bookForm.querySelector('#title').value;
    const author = bookForm.querySelector('#author').value;
    const isbn = bookForm.querySelector('#isbn').value;

    // validate not null and not undefined
    const noNulls = (title != null && author != null && isbn != null);
    const allDefined = (typeof title != "undefined" && typeof author != "undefined" && typeof isbn != "undefined");
    const validInputs = noNulls && allDefined;

    if (validInputs) {
        // instantiate a new book
        const newBook = new Book(title, author, isbn);
        // add book to app data book list
        app.methods.addBook(newBook);

        clearBookForm();
    } else {
        alert("Bad inputs in book form.")
    }
}

function clearBooksEvent(event) {
    if (event.target.id === "clear-books") {
        app.methods.clearBooks();
    }
}

function deleteSelectedBookEvent(event) {
    // this will involved event delegation listening for a click event and using the target's identity to remove it from the app data
    event.preventDefault();

    const books = app.data.books;
    const id = parseInt(event.target.parentNode.parentNode.id);

    const newBookList = books.filter(function(element, index) {
        return (id != index);
    });

    app.methods.setBooks(newBookList);
}


(function loadEventListeners() {
    document.addEventListener('DOMContentLoaded', onLoadEvent);
    bookForm.addEventListener('submit', addBookEvent);
    clearBooksBtn.addEventListener('click', clearBooksEvent);
    booksCollection.addEventListener('click', deleteSelectedBookEvent);
})();

// (function init() {
//     app.initialize();
// })();
