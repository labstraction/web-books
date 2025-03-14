import Book from "../model/book.js";
import Author from "../model/author.js";


class BookService {

    getBooks(){
        fetch("/assets/books.json")
        .then(resp => resp.json())
        .then(data => {
            const books = this.fromRawDataToBooks(data);

            console.log(books);

            return books;
        })
        .catch(err => console.log(err))
    }

    fromRawDataToBooks(booksData){

        const books = [];

        for (let i = 0; i < booksData.length; i++) {
            const data = booksData[i];

            const id = ...
            const title = ...
            const authors = this.createAuthors(...)
            const summary = ...
            const subjects = ...
            const coverImg = ...


            const newBook = new Book(id, title, authors, summary, subjects, coverImg);

            books.push(newBook)

        }

        return books;
    }

    createAuthors(authorsData){
        const authors = [];

        for (let i = 0; i < authorsData.length; i++) {
            const data = authorsData[i];

            const name = ...
            const yob = ...
            const yod = ...


            const newAuth = new Author(name, yob, yod);

            authors.push(newAuth)

        }

        return authors;
    }

}

export default BookService;