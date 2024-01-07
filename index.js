const books = [
  {
    name: "To Kill a Mockingbird",
    authorFirst: "Harper",
    authorLast: "Lee",
    publishDate: 1960,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Great Gatsby",
    authorFirst: "F. Scott",
    authorLast: "Fitzgerald",
    publishDate: 1925,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Hobbit",
    authorFirst: "JRR",
    authorLast: "Tolkien",
    publishDate: 1937,
    genre: ["fantasy", "fiction"],
  },
  {
    name: "Harry Potter and the Deathly Hallows",
    authorFirst: "JK",
    authorLast: "Rowling",
    publishDate: 1997,
    genre: ["fantasy", , "fiction"],
  },
  {
    name: "Ulysses",
    authorFirst: "James",
    authorLast: "Joyce",
    publishDate: 1918,
    genre: ["historical", "non-fiction"],
  },
  {
    name: "War and Peace",
    authorFirst: "Leo",
    authorLast: "Tolstoy",
    publishDate: 1867,
    genre: ["historical", "fiction"],
  },
  {
    name: "Pride and Prejudice",
    authorFirst: "Jane",
    authorLast: "Austen",
    publishDate: 1813,
    genre: ["fiction"],
  },
  {
    name: "The Catcher in the Rye",
    authorFirst: "JD",
    authorLast: "Salinger",
    publishDate: 1951,
    genre: ["fiction"],
  },
  {
    name: "Great Expectations",
    authorFirst: "Charles",
    authorLast: "Dickens",
    publishDate: 1861,
    genre: ["historical", "fiction"],
  },
  {
    name: "Little Women",
    authorFirst: "Lousia May",
    authorLast: "Alcott",
    publishDate: 1868,
    genre: ["womens", "historical", "fiction"],
  },
];

const titles = [
  "To Kill a Mockingbird",
  "The Great Gatsby",
  "The Hobbit",
  "Harry Potter and the Deathly Hallows",
  "Ulysses",
  "War and Peace",
  "Pride and Prejudice",
  "The Catcher in the Rye",
  "Great Expectations",
  "Little Women",
];

//Array of authors and the book they wrote
//"--- wrote --- in ---",
books.forEach((book) => console.log(`${book.authorFirst} wrote ${book.name} in ${book.publishDate}`));
 
//Sort books from oldest to most recent
books.sort((book1, book2) => {
  return book1.publishDate - book2.publishDate
});
console.log(books);


//sort books alphabetically
books.sort((book1, book2) => {
  return book1.name - book2.name
});
console.log(books);

//Find who wrote War and Peace
const warAndPeaceBook = books.find(book => book.name === "War and Peace");
const author = warAndPeaceBook && `${warAndPeaceBook.authorFirst} ${warAndPeaceBook.authorLast}`;
console.log(author);

//how many books were written before 1900?
const booksBefore1900 = books.filter(book => book.publishDate <= 1900);
console.log(booksBefore1900);

//was there at least one book published within the last 100 years?
const currentYear = new Date().getFullYear();
const last100Years = currentYear - 100;
let bookLast100Year = false;

for (const book of books) {
  if (book.publishDate >= last100Years) {
    bookLast100Year = true;
    break;
  }
}

if (bookLast100Year) {
  console.log("Yes, there at least one book published within the last 100 years");
} else {
  console.log("No, there isn't"); 
}

//was every book published within the last 100 years?
const allBookLast100 = books.filter(book => book.publishDate >= last100Years);

if (allBookLast100) {
  console.log("Yes, every book was published within the last 100 years.");
} else {
  console.log("No, not every book was published within the last 100 years.");
}

//print a list of books that "includes" the genre historical
const historicalBooks = books.filter(book => book.genre.includes("historical"));

historicalBooks.forEach(book => {
  console.log(`${book.name} by ${book.authorFirst} ${book.authorLast}`);
});