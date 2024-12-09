//Class refactor of library
//encapsulate the book constructor into a class √
//encapsulate the display into its own function√
//use inheritance to change read status - √
//refactor HTML form into JS dynamic form √
//Create grid for library - in progress
//Create grid for header
//SVG icons for left-aside
//Exit button for books
//Design and organize

const createForm = (function(){
    const dialog = document.querySelector('#formDialog');
    const dialogBtn = document.createElement('BUTTON');
    const btnContainer = document.querySelector('.button-container');

    dialogBtn.textContent = 'Add Book';
    dialogBtn.classList.add('newbook-btn')
    btnContainer.append(dialogBtn);

    let counter = 0;

    const bookForm = (function(){
        const form = document.querySelector('#form');
        const authorLabel = document.createElement('LABEL');
        authorLabel.textContent = 'Author';
        form.appendChild(authorLabel)

        const authorEl = document.createElement('INPUT');
        authorEl.classList.add('book-author');
        authorEl.placeholder = 'J.R.R Tolkien';
        authorEl.name = 'authorName';
        form.appendChild(authorEl);

        const titleLabel = document.createElement('LABEL');
        titleLabel.textContent = 'Title';
        form.appendChild(titleLabel);
        const titleEl = document.createElement('INPUT');
        titleEl.classList.add('book-title');
        titleEl.placeholder = 'The Hobbit';
        titleEl.name = 'bookName'
        form.appendChild(titleEl);

        const pagesLabel = document.createElement('LABEL');
        pagesLabel.textContent = 'Pages';
        form.appendChild(pagesLabel)
        const pagesEl = document.createElement('INPUT');
        pagesEl.classList.add('book-pages');
        pagesEl.placeholder = '304';
        pagesEl.name = 'bookPages';
        form.appendChild(pagesEl);

        const readLabel = document.createElement('LABEL');
        readLabel.textContent = 'Read / Not Read';
        form.appendChild(readLabel);
        const readEl = document.createElement('INPUT');
        readEl.classList.add('book-read');
        readEl.type = 'checkbox';
        form.appendChild(readEl);

        const submitBtn = document.createElement('BUTTON');
        submitBtn.type = 'submit';
        submitBtn.textContent = 'Submit';
        form.appendChild(submitBtn);

        submitBtn.addEventListener('click', (e) => {
            counter++;
            e.preventDefault();
            const bookData = new FormData(form);
            const authorInput = bookData.get('authorName');
            const titleInput = bookData.get('bookName');
            const pagesInput = bookData.get('bookPages');
            const readInput = readEl.checked ? 'Read' : 'Not read'

            if(counter <= 6){
                const book = new Book(authorInput, titleInput, pagesInput, readInput);
                const library = new Library(book);
            }else{
                alert('You have too many books! Maximum of 6')
            }
            authorEl.value = '';
            titleEl.value = ''
            pagesEl.value= '';
            readEl.checked = false;
            dialog.close();
        })
    }());

    dialogBtn.addEventListener('click', () => {
        dialog.showModal();
    });
}())

function Book(author, title, pages, read){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}
Book.prototype.getRead = function(book, readBtn){
    if(this.read !== 'Read'){
        this.read = 'Read';
        readBtn.textContent = this.read;
  
    }else{
        this.read = 'Not read';
        readBtn.textContent = this.read;
    }
}
function Library(book){
    this.book = book;
    const library = [];
    library.push(book);

   function displayLibrary(){
        const newBook = document.createElement('UL');
        newBook.classList.add('book');
    
        const deleteBtn = document.createElement('BUTTON');
        deleteBtn.classList.add('delBtn');
    
        const readBtn = document.createElement('BUTTON');
        readBtn.classList.add('readBtn');

        const bookEl = document.querySelector('.book-container');
        bookEl.appendChild(newBook);
        
        for(let i = 0; i < library.length; i++){
            let author = library[i].author;
            const authorDisplay = document.createElement('LI');
            authorDisplay.textContent = `Author: ${author}`;
            newBook.appendChild(authorDisplay);

            let title = library[i].title;
            const titleDisplay = document.createElement('LI');
            titleDisplay.textContent = `Book title: ${title}`
            newBook.appendChild(titleDisplay);

            let pages = library[i].pages;
            const pagesDisplay = document.createElement('LI');
            pagesDisplay.textContent = `Pages: ${pages}`;
            newBook.appendChild(pagesDisplay);

            let read = library[i].read;
            readBtn.textContent = read;
            newBook.appendChild(readBtn);
        
            readBtn.addEventListener('click', () => {book.getRead(book,readBtn)});
        }
        deleteBtn.textContent = 'Delete';
        newBook.appendChild(deleteBtn); 

        deleteBtn.addEventListener('click', () => {
            newBook.remove();
        })
    }
    displayLibrary();
}
//This input form was created as an IIFE and the form creation function is encapsulated to allow only one form to be created until the form is submitted





