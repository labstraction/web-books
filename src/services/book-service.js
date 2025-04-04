import Book from "../model/book.js";
import Author from "../model/author.js";


class BookService {

    getBooks(){
        return fetch("/assets/books.json")
        .then(resp => resp.json())
        .then(data => {
            const books = this.fromRawDataToBooks(data);

            console.log(books);

            return books;
        })
        .catch(err => console.log(err))
    }

    getBooKFromId(id){
        return this.getBooks()
        .than(books => {
            const book = ...

            return book;
        });
    }

    fromRawDataToBooks(booksData){

        const books = [];

        for (let i = 0; i < booksData.length; i++) {
            const data = booksData[i];

            const id = data.id;
            const title = data.title;
            const authors = this.createAuthors(data.authors)
            const summary = data.summaries[0];
            const subjects = data.subjects;
            const coverImg = data.formats['image/jpeg']


            const newBook = new Book(id, title, authors, summary, subjects, coverImg);

            books.push(newBook)

        }

        return books;
    }

    createAuthors(authorsData){
        const authors = [];

        for (let i = 0; i < authorsData.length; i++) {
            const data = authorsData[i];

            const name = data.name;
            const yob = data.birth_year;
            const yod = data.death_year;

            const newAuth = new Author(name, yob, yod);

            authors.push(newAuth)

        }

        return authors;
    }

}

export default BookService;