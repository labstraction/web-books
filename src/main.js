
//2) create la classe libro e la classe autore
    //-libro: id, title(string), autors(array di autori), summary(stringa il primo dei summaries, subjects (array di stringhe)), coverImage(stringa-url)
    //-Author: name, yob, yod => calcola età
 //3) traducede il dato grezzo in oggetti
 //4) create una visualizzazione di schede libro con i dati disponibili
 //5) mettete un tasto che permetta di mettere in ordine i libri per titolo
import BookService from "./services/book-service.js";

const bService = new BookService()

const booksPromise = bService.getBooks();
booksPromise.then(books => render(books));

function render(books){
    
    const mainContainer = document.getElementById('books-container');
    mainContainer.innerText = '';

    for (let i = 0; i < books.length; i++) {
        const book = books[i];

        const bookContainer = document.createElement('a');
        bookContainer.classList.add('book-card');
        bookContainer.href = "/detail.html?id=" + book.id;

        const img = document.createElement('img');
        img.src = book.image;
        bookContainer.appendChild(img);

        const titleH = document.createElement('h3');
        const titleNode = document.createTextNode(book.title);
        titleH.appendChild(titleNode);
        bookContainer.appendChild(titleH);


        mainContainer.appendChild(bookContainer)
        
    }
}