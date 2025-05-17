const coding = ["js", "ruby", "java", "pythone", "cpp"];

// const values = coding.forEach((item) => { //forEach loop ont return value
//     console.log(item);
// });

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNums.filter( (num) => num > 4)

// const newNums = myNums.filter((num) => {return num > 4})
// console.log(newNums)

const newNums = []

myNums.filter((num) => {
    if(num>4){
        newNums.push(num)
    }
})

// console.log(newNums)

const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 2010 },
  { title: 'Book Eight', genre: 'Science', publish: 2005, edition: 2011 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1995, edition: 2000 },
  { title: 'Book Ten', genre: 'Fiction', publish: 2010, edition: 2015 },
  { title: 'Book Eleven', genre: 'History', publish: 2001, edition: 2006 },
  { title: 'Book Twelve', genre: 'Science', publish: 2013, edition: 2018 },
  { title: 'Book Thirteen', genre: 'Fiction', publish: 1990, edition: 1999 },
  { title: 'Book Fourteen', genre: 'Non-Fiction', publish: 1985, edition: 1993 },
  { title: 'Book Fifteen', genre: 'History', publish: 2007, edition: 2012 },
  { title: 'Book Sixteen', genre: 'Science', publish: 2004, edition: 2009 },
  { title: 'Book Seventeen', genre: 'Fiction', publish: 2002, edition: 2007 },
  { title: 'Book Eighteen', genre: 'Non-Fiction', publish: 1998, edition: 2003 },
  { title: 'Book Nineteen', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Twenty', genre: 'History', publish: 2000, edition: 2005 }
];

let userBooks = books.filter( (bk) => bk.genre = "History");
userBooks = books.filter( (bk) => {return bk.publish>= 2000 && bk.genre == "History"})
console.log(userBooks);
