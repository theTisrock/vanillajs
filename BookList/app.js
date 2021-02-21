
// Book class (es5 style)
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// test
// const book = new Book("To Kill A Mockingbird", "Harper Lee", 999);
// console.log(book);

// mock data
const mockingbird = new Book("To Kill A Mockingbird", "Harper Lee", 999);
const moutain = new Book("My Side of the Mountain", "Jean Craighead George", 888);
const drseuss = new Book("Green Eggs & Ham", "Dr. Suess", 777);

// ui
const bookForm = document.querySelector('#book-form');
const clearBooksBtn = document.querySelector('#clear-books');


const app = {
    data: {
        books: [mockingbird, moutain, drseuss],
    },
    methods: {
        clearAllBooks: function() {
            app.data.books = [];
            refreshBookTable();
        },
        addBook: function(newBook) {
            app.data.books.push(newBook);
            refreshBookTable();
        },
    },
}


function clearAllBooksFromTable() {
    const tbody = document.querySelector('#books-collection');
    tbody.querySelectorAll('td').forEach(function(tableDataEntry) {
        tableDataEntry.remove();
    });
}


function refreshBookTable() {
    clearAllBooksFromTable();

    const books = app.data.books;  // app data
    console.log(books);
    const tbody = document.querySelector('#books-collection');  // acquire DOM section

    // for each entry in books list
    books.forEach(function(bookObject) {
        const row = document.createElement('tr');

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
    refreshBookTable();
}

function addBookEvent(event) {
    event.preventDefault();
    // extract data
    const title = bookForm.querySelector('#title').value;
    const author = bookForm.querySelector('#author').value;
    const isbn = bookForm.querySelector('#isbn').value;

    // console.log(title, author, isbn);  // test

    // validate not null and not undefined
    const noNulls = (title != null && author != null && isbn != null);
    const allDefined = (typeof title != "undefined" && typeof author != "undefined" && typeof isbn != "undefined");
    const validInputs = noNulls && allDefined;

    if (validInputs) {
        // instantiate a new book
        const newBook = new Book(title, author, isbn);
        // add book to app data book list
        app.methods.addBook(newBook);
    } else {
        alert("Bad inputs in book form.")
    }
}

function clearBooksEvent(event) {
    app.methods.clearAllBooks();
}


(function loadEventListeners() {
    document.addEventListener('DOMContentLoaded', onLoadEvent);
    bookForm.addEventListener('submit', addBookEvent);
    clearBooksBtn.addEventListener('click', clearBooksEvent);

})();
