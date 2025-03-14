import BookService from "./services/book-service";


const queryParams = ...;

console.log(queryParams);

const idString = ...;

console.log(idString);

const id = ...;

console.log(id);

const bService = new BookService();

bService.getBooKFromId(id).than(book => renderBook(book))

function renderBook(book) {
    console.log(book);
}