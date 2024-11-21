//Class refactor of library
//encapsulate the book constructor into a class
//encapsulate the display into its own function
//refactor HTML form into JS dynamic form

// class Library {
//     constructor(){
//         this.value = value;
//     }
// }

const submit = document.querySelector('.submit');
const library = document.querySelector('.library-container');

// const authorInput = document.querySelector('#author');
// const titleInput = document.querySelector('#title');
// const pagesInput = document.querySelector('#pages');
// const readInput = document.querySelector('#read');

const bookLibrary = [];
//create dynamic HTML form
const createForm = (function(){

    const formCreate = () => {
        const formContainer = document.querySelector('#form-container');
        const form = document.createElement('form');
        form.id = 'form';
        formContainer.appendChild(form);

        const authorLabel = document.createElement('label');
        authorLabel.textContent = 'Author';
        form.appendChild(authorLabel);
        const authorEl = document.createElement('input');
        authorEl.classList.add('book-author');
        authorEl.placeholder = 'J.R.R Tolkien';
        authorEl.name = 'authorName';
        form.appendChild(authorEl);

        const titleLabel = document.createElement('label');
        titleLabel.textContent = 'Title';
        form.appendChild(titleLabel);
        const titleEl = document.createElement('input');
        titleEl.classList.add('book-title');
        titleEl.placeholder = 'The Hobbit';
        titleEl.name = 'bookName'
        form.appendChild(titleEl);

        const pagesLabel = document.createElement('label');
        pagesLabel.textContent = 'Pages';
        form.appendChild(pagesLabel)
        const pagesEl = document.createElement('input');
        pagesEl.classList.add('book-pages');
        pagesEl.placeholder = '304';
        pagesEl.name = 'bookPages';
        form.appendChild(pagesEl);

        const readLabel = document.createElement('label');
        readLabel.textContent = 'Read / Not Read';
        form.appendChild(readLabel);
        const readEl = document.createElement('input');
        readEl.classList.add('book-read');
        readEl.type = 'checkbox';
        form.appendChild(readEl);

        const submitBtn = document.createElement('button');
        submitBtn.type = 'submit';
        submitBtn.textContent = 'New Book';
        form.appendChild(submitBtn);

        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const bookData = new FormData(form);
            const authorInput = bookData.get('authorName');
            const titleInput = bookData.get('bookName');
            const pagesInput = bookData.get('bookPages');
            const readInput = readEl.checked ? 'read' : 'not read'

            console.log(authorInput, titleInput, pagesInput, readInput);
        })
    }
    formCreate();
})();
//submit.addEventListener('click', () => {
    //     if(readInput.checked){
    //         addBookToLibrary();
    //     }else{
    //         readInput.value = "Not read";
    //         addBookToLibrary();
    //     }

// function Book(author, title, pages, read){
//     this.author = author;
//     this.title = title;
//     this.pages = pages;
//     this.read = read;

// };
// Book.prototype.getRead = function(book, readBtn){
//     if(this.read !== 'Read'){
//         this.read = 'Read';
//         readBtn.textContent = this.read;
  
//     }else{
//         this.read = 'Not read';
//         readBtn.textContent = this.read;
  
//     }
// }
// function addBookToLibrary(){

//     let author = authorInput.value;
//     let title = titleInput.value;
//     let pages = pagesInput.value;
//     let read  = readInput.value;

//     const book = new Book(author,title,pages, read);
//     bookLibrary.push(book);
   
//     displayBook(book);
//     clearBook();
//     clearForm();
// }

// function displayBook(book){
//     const newBook = document.createElement('ul');
//     const deleteBtn = document.createElement('button');
//     const readBtn = document.createElement('button');
//     library.appendChild(newBook);
    
//     for(let i = 0; i < bookLibrary.length; i++){
   
//         let author = bookLibrary[i].author;
//         const authorDisplay = document.createElement('li');
//         authorDisplay.textContent = author;
//         newBook.appendChild(authorDisplay);

//         let title = bookLibrary[i].title;
//         const titleDisplay = document.createElement('li');
//         titleDisplay.textContent = title;
//         newBook.appendChild(titleDisplay);

//         let pages = bookLibrary[i].pages;
//         const pagesDisplay = document.createElement('li');
//         pagesDisplay.textContent = pages;
//         newBook.appendChild(pagesDisplay);

//         let read = bookLibrary[i].read;
//         readBtn.textContent = read;
//         newBook.appendChild(readBtn);
     
//         readBtn.addEventListener('click', () => {book.getRead(book,readBtn)});
//     }
    
//     deleteBtn.textContent = "Delete";
//     newBook.appendChild(deleteBtn); 

//     deleteBtn.addEventListener('click', () => {
//         library.remove();
//     })
// }

// function clearForm(){
//     authorInput.value = '';
//     titleInput.value = '';
//     pagesInput.value = '';

// }
// function clearBook(){
//     while(bookLibrary.length > 0) {
//         bookLibrary.pop();
//     }
// }
//
    
// });

// start.addEventListener("click", (e) => {
//     form.classList.toggle("hidden");
// });




