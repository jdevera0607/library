const form = document.querySelector('#form-container');
const button = document.querySelector('.btn');
const submit = document.querySelector('.submit');


const authorInput = document.querySelector('.author');
const titleInput = document.querySelector('.title');
const pagesInput = document.querySelector('.pages');
const readInput = document.querySelector('.read');


function Book(author, title, pages, read){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;

    const bookLibrary = [];
    bookLibrary.push(author, title, pages, read);
    alert(bookLibrary);
}

function addBookToLibrary(){

    const value1 = authorInput.value;
    const value2 = titleInput.value;
    const value3 = pagesInput.value;
    const value4  = readInput.value;

    const book = new Book(value1, value2, value3, value4);
}
button.addEventListener("click", (e) => {
    form.classList.toggle("hidden");
});

