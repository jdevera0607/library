const form = document.querySelector('#form-container');
const start = document.querySelector('.btn');
const submit = document.querySelector('.submit');
const list = document.querySelector('.list-container');

const authorInput = document.querySelector('#author');
const titleInput = document.querySelector('#title');
const pagesInput = document.querySelector('#pages');
const readInput = document.querySelector('#read');

const bookLibrary = [];

function Book(author, title, pages, read){

    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;

    bookLibrary.push(author, title, pages, read);
    displayBook();
    clearBook();
    clearForm();
}

function addBookToLibrary(){

    let authorVal = authorInput.value;
    let titleVal = titleInput.value;
    let pagesVal = pagesInput.value;
    let readVal  = readInput.value;

    const book = new Book(authorVal,titleVal,pagesVal,readVal);
}

function displayBook(){
    const library = document.createElement('ul');
    const deleteBtn = document.createElement('button');
    list.appendChild(library);
    for(let i = 0; i < bookLibrary.length; i++){
        const listItem = document.createElement('li');
        library.appendChild(listItem);
        listItem.textContent = bookLibrary[i];
    }
    deleteBtn.textContent = "Delete";
    library.appendChild(deleteBtn); 
   
    deleteBtn.addEventListener('click', () => {
        library.remove();
    })
}
function clearForm(){
    authorInput.value = '';
    titleInput.value = '';
    pagesInput.value = '';
    readInput.value = '';
}
function clearBook(){
    while(bookLibrary.length > 0) {
        bookLibrary.pop();
    }
}
submit.addEventListener('click', () => {
    addBookToLibrary();
});

start.addEventListener("click", (e) => {
    form.classList.toggle("hidden");
});

