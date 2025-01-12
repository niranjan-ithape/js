const books = [
    {
      title: "To Kill a Mockingbird",
      genre: "Fiction",
      publishYear: 1960
    },
    {
      title: "1984",
      genre: "Dystopian",
      publishYear: 1949
    },
    {
      title: "Moby Dick",
      genre: "Adventure",
      publishYear: 1851
    },
    {
      title: "The Great Gatsby",
      genre: "Fiction",
      publishYear: 1925
    },
    {
      title: "Pride and Prejudice",
      genre: "Romance",
      publishYear: 1813
    },
    {
      title: "The Catcher in the Rye",
      genre: "Fiction",
      publishYear: 1951
    },
    {
      title: "Brave New World",
      genre: "Dystopian",
      publishYear: 1932
    },
    {
      title: "The Hobbit",
      genre: "Fantasy",
      publishYear: 1937
    },
    {
      title: "War and Peace",
      genre: "Historical Fiction",
      publishYear: 1869
    },
    {
      title: "The Lord of the Rings",
      genre: "Fantasy",
      publishYear: 1954
    }
  ];

  
const userbook=books.filter( (bk) => bk.genre==="Fiction" )

const year=books.filter( (bk) =>bk.publishYear >1951 )

console.log(year);

