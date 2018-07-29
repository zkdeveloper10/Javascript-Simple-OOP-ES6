class Book{
    constructor(title, author, year, description, english){
        this.title = title; 
        this.author = author; 
        this.year = year; 
        this.description = description; 
        this.english = english;  
    }
}


class UI{
    addBook(book){

        const list = document.getElementById('book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.year}</td>
        <td>${book.description}</td>
        <td>${book.english}</td>
        <td><a href="#" class="delete"><i class="fa fa-remove"></i><a></td>
        `;
    
        list.appendChild(row);
    }

    clearInputTextFields() {
        const inputs = Array.from(document.querySelectorAll(".text-field"));
        
        inputs.forEach(function(element, index){
            element.value = '';      
        }); 
    }

    uncheckChekboxes(){
        const checkboxes = Array.from(document.querySelectorAll(".checkbox-field"));
        console.log(checkboxes);
        checkboxes.forEach(function(element, index){
            element.checked = false
        });
    }
}

const bookForm = document.getElementById('book-form');
const yearInput = document.getElementById('year');
fireEvents();

function fireEvents(){
    bookForm.addEventListener('submit', addBook);
    yearInput.addEventListener('keyup', allowFourDigits);
}

function addBook(e){
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          year = document.getElementById('year').value,
          description = document.getElementById('description').value,
          english = document.getElementById('english').checked;

    const book = new Book(title, author, year, description, english);

    const ui = new UI();

    ui.addBook(book);

    console.log(book);

    ui.clearInputTextFields();
    ui.uncheckChekboxes();

    e.preventDefault();
}


function allowFourDigits(){
    if(this.value.length > 4){
        this.value = this.value.slice(0,4); 
    }
}



    

