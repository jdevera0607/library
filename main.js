const form = document.querySelector('#form-container');
const start = document.querySelector('.btn');
const submit = document.querySelector('.submit');
const library = document.querySelector('.library-container');

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
};
Book.prototype.getRead = function(book){
   console.log(book);
    
}
function addBookToLibrary(){

    let author = authorInput.value;
    let title = titleInput.value;
    let pages = pagesInput.value;
    let read  = readInput.value.toLowerCase();

    const book = new Book(author,title,pages, read);
    bookLibrary.push(book);
   
    displayBook(book);
    clearBook();
    clearForm();
}

function displayBook(book){
    const newBook = document.createElement('ul');
    const deleteBtn = document.createElement('button');
    library.appendChild(newBook);
    
    for(let i = 0; i < bookLibrary.length; i++){
   
        let author = bookLibrary[i].author;
        const authorDisplay = document.createElement('li');
        authorDisplay.textContent = author;
        newBook.appendChild(authorDisplay);

        let title = bookLibrary[i].title;
        const titleDisplay = document.createElement('li');
        titleDisplay.textContent = title;
        newBook.appendChild(titleDisplay);

        let pages = bookLibrary[i].pages;
        const pagesDisplay = document.createElement('li');
        pagesDisplay.textContent = pages;
        newBook.appendChild(pagesDisplay);

        let read = bookLibrary[i].read;
        const readBtn = document.createElement('button');
        readBtn.textContent = read;
        newBook.appendChild(readBtn);
        readBtn.addEventListener('click', book.getRead(book));
    }
    
    deleteBtn.textContent = "Delete";
    newBook.appendChild(deleteBtn); 

    
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

