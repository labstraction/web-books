import Author from "./author.js";

export default class Book {
    constructor(id, title, authors, summary, subjects, image) {
        this.id = id;
        this.title = title;
        this.authors = authors;
        this.summary = summary;
        this.subjects = subjects;
        this.image = image;
        
    }

}

// const author1 = new Author('pippo', 1950, 1980);

// const author2 = new Author('pluto', 1950, null);

// const author3 = new Author('paperino', null, null);


// const authors = [author1, author2, author3]
// const subjects = ['giallo', 'epica']

// const book1 = new Book(123, 'iliade', authors, 'un gran bel libro', subjects, 'http://stocazzo.com/immagine-brutta.jpg');
// console.log(book1)
