// TODO: define addFavoriteBook(..) function
function addFavoriteBook(bookName) {
    if(bookName.includes('Great')) {
        alert("do not add"); 
    } else {
        favoriteBooks.push(bookName);
        alert(favoriteBooks);
    }
}

// TODO: define printFavoriteBooks() function

var favoriteBooks = [];

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

// TODO: print out favorite books
