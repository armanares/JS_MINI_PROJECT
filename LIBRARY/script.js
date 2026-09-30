const myLibrary = [];

function Book(title, author,pages) {
  this.title = title;
  this.author = author;
  this.read = false;
  this.pages = pages;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(title,author , pages) {
  const newBook = new Book(title, author, pages);
  myLibrary.push(newBook);
}



const bookForm = document.querySelector("#new-book-form");
bookForm.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  const titleInput = document.querySelector("#title").value;
  const authorInput = document.querySelector("#author").value;
  const pagesInput = document.querySelector("#pages").value;

  addBookToLibrary(titleInput, authorInput, pagesInput);

  displayBooks();

  document.querySelector("#new-book-form").reset();
}

Book.prototype.toggleRead = function () {
  this.read = !this.read;
};



function displayBooks() {
  const library = document.querySelector("#library");

 
  library.innerHTML = "";

  myLibrary.forEach((book) => {
    const bookDiv = document.createElement("div");

    bookDiv.setAttribute("data-id", book.id);

    bookDiv.innerHTML = `
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
      <p>Read: ${book.read ? "Yes" : "No"}</p>

      <button class="remove-btn">Remove</button>
      <button class="read-btn">Change Read Status</button>
    `;

  
    const removeButton = bookDiv.querySelector(".remove-btn");

    removeButton.addEventListener("click", () => {
      const bookId = bookDiv.dataset.id;

      const index = myLibrary.findIndex(
        (book) => book.id === bookId
      );

      myLibrary.splice(index, 1);

      displayBooks();
    });


    // Read status button
    const readButton = bookDiv.querySelector(".read-btn");

    readButton.addEventListener("click", () => {
      book.toggleRead();

      displayBooks();
    });


    library.appendChild(bookDiv);
  });
}

// displayBooks();



