// Exercise
// Write a constructor for making “Book” objects. We will revisit this in the next project. Your book objects should have the book’s title, author, the number of pages, and whether or not you have read the book.
// Put a function into the constructor that can rep

function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor")
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function (){
        return this.title + " by " + this.author + ", " + this.pages + " pages, " + (this.read?"read":"not read yet");
    }
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 255, false);

console.log(theHobbit.info());

Book.prototype.sayHello = function() {
    console.log("Hello, I an a book!");
}

theHobbit.sayHello();

console.log(Object.getPrototypeOf(theHobbit));

console.log(Object.prototype.hasOwnProperty('valueOf'));
console.log(theHobbit.valueOf());