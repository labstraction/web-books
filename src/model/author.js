export default class Author {
    constructor() {
        
    }

    getAge(){

    }
}

const auth1 = new Author('pippo', 1950, 1980);
console.log(auth1)
console.log(auth1.getAge())
const auth2 = new Author('pluto', 1950, null);
console.log(auth2)
console.log(auth2.getAge())
const auth3 = new Author('paperino', null, null);
console.log(auth3)
console.log(auth3.getAge())