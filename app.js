// book class
class Book {
    constructor(title, author, year, description, english) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.description = description;
        this.english = english;
    }
}


class UI {
    // add book
    addBook(book) {
        const list = document.getElementById('book-list');
        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.year}</td>
        <td>${book.description}</td>
        <td>${book.english}</td>
        <td><a href="" ><i id="remove"  class="fa fa-remove delete"></i><a></td>
        `;

        list.appendChild(row);
    }

    clearInputTextFields() {
        const inputs = Array.from(document.querySelectorAll(".text-field"));

        inputs.forEach(function (element, index) {
            element.value = '';
        });
    }

    uncheckChekboxes() {
        const checkboxes = Array.from(document.querySelectorAll(".checkbox-field"));
        // console.log(checkboxes);
        checkboxes.forEach(function (element, index) {
            element.checked = false
        });
    }

    delete(target) {
        if (target.classList.contains("delete")) {
            target.parentElement.parentElement.parentElement.remove();
        }
    }
}


// add book
function addBook(e) {
    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        year = document.getElementById('year').value,
        description = document.getElementById('description').value,
        english = document.getElementById('english').checked;

    const book = new Book(title, author, year, description, english);
    const ui = new UI();

    ui.addBook(book);

    ui.clearInputTextFields();
    ui.uncheckChekboxes();
    e.preventDefault();
}

//limit year input to 4digits
function allowFourDigits() {
    if (this.value.length > 4) {
        this.value = this.value.slice(0, 3);
    }
}

function deleteBook(e) {
    e.preventDefault();

    const ui = new UI();
    ui.delete(e.target);

}



// events function
const bookForm = document.getElementById('book-form');
const yearInput = document.getElementById('year');
const tr = document.getElementById('book-list');
function fireEvents() {
    bookForm.addEventListener('submit', addBook);
    yearInput.addEventListener('keydown', allowFourDigits);
    if (tr) {
        tr.addEventListener('click', deleteBook);
        // tr.addEventListener("click", (e) => { e.preventDefault(); });
    }

}


fireEvents();