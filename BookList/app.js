/* ES 5 book application */

/* we need:

 1. book app with a data model
 2. book objects
 2. communication layer between DOM and app and app to DOM

 */

function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

const mockingbird = new Book("To Kill A Mockingbird", "Harper Lee", 12345);
const mountain = new Book("My Side of the Mountain", "Jean Craighead George", 54321);
const orwell = new Book("1984", "George Orwell", 56789);


const app = {
    data: {
        books: [mockingbird, mountain, orwell],
    },
    methods: {
        createBook: function(title, author, isbn) {
            return new Book(title, author, isbn);
        },
        addBook: function(newBook) {
            app.data.books.append(newBook);
        },
        deleteBook: function() {
            return null;
        },
        clearAllBooks: function() {
            return null;
        },
    },
}

// App to DOM
function clearBooksTable() {
    const tableBody = document.querySelector('#books-collection');
    tableBody.querySelectorAll('tr').forEach(function(row) {
        row.remove();
    })
}

function renderBooksTable() {

    // clear the UI
    clearBooksTable();

    const books = app.data.books;
    const tableBody = document.querySelector('#books-collection');

    // apply current app data state to UI
    books.forEach(function(bookObject) {
        const newTableRow = document.createElement('tr');

        const deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('type', 'submit');

        const title = document.createElement('td');
        const author = document.createElement('td');
        const isbn = document.createElement('td');
        const del = document.createElement('td');

        title.textContent = bookObject.title;
        author.textContent = bookObject.author;
        isbn.textContent = bookObject.isbn;
        del.innerHTML = `<button>delete</button>`;

        newTableRow.appendChild(title);
        newTableRow.appendChild(author);
        newTableRow.appendChild(isbn);
        newTableRow.appendChild(del);

        console.log(newTableRow);

        tableBody.appendChild(newTableRow);
    });
}