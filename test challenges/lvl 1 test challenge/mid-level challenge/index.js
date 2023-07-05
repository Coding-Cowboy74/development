// The Book Constructor Function that takes the parameters of title, author and year. 

// We set the up the properties and assign them to the parameters that are being passed in the function to be used 
function Book(title, author, year) {
    
    // in the following the bookTitle, bookAuthor and publishYear are the properties that are assigned to the corresponding parameters. 
    // bookTitle is set to the title parameter, bookAuthor property is set to the author parameter and publishYear property is set to the year parameter.
    this.bookTitle = title;
    this.bookAuthor = author;
    this.publishYear = year;

    // Here are making up a method function that will return a statement for the console log to read once the instantiate code has been ran for it. 
    // all we are doing is returning the statement of the book title, book author and the published year.

    // all of this statement is to be displayed via console log and should be displayed on separate lines to make the reading or presentation more pleadable. 
    this.GetDetails = function() {
        return ("\n Book title: " + this.bookTitle + "\n Book author: " + this.bookAuthor + "\n Published year: " + this.publishYear);
    }
}

// in the following sections upwards to the next code challenge area is where we are instantiating the constructor function and expecting a readable statement.
// there are 2 new books called book1 and book2, each one has different titles, authors and years. They should be separate views but still readable to the user. 
const book1 = new Book("The Great Gadsby", "F. Scott Fitzgerald", 1925);
console.log(book1.GetDetails());

const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
console.log(book2.GetDetails());



// This is a function that is going to look for duplicate numbers stored into the empty array and remove the duplicates and return the array without the 
// duplicate numbers. 
function removeDuplicate(arr) {

    //  Here we are declaring a variable array that is empty. The purpose of this empty array is to catch the values that wil get passed to it from the user.
    let uniqueArrg = [];

    // Here we need to loop through the array of numbers that the user supplied and determine if there are duplicate numbers. Then return the array to be shown
    // back to the user. 
    for (let i of arr) {
        if (uniqueArrg.indexOf(i) === -1) {
            uniqueArrg.push(i);
        }
    }
    
    // Finally we are showing off the array without any duplicate numbers if there were any. 
    console.log(uniqueArrg);
}


console.log(removeDuplicate([1, 2, 2, 3, 4, 4, 5]));
console.log(removeDuplicate([5, 5, 5, 5, 5]));
