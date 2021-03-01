function findAuthorById(authors, id) {
  let found = authors.find((author) => author.id === id);
  return found;
}

function findBookById(books, id) {
  let found = books.find((book) => book.id === id);
  return found;
}

function partitionBooksByBorrowedStatus(books) {
  let result = [];
  let borrowed = books.filter((book) => book.borrows[0].returned === false);
  let notBorrowed = books.filter((book) => book.borrows[0].returned === true);
  result.push(borrowed);
  result.push(notBorrowed);
  return result;
}

function getBorrowersForBook(book, accounts) {
  let arr = [];
  let arr2 = [];
  let arr3 = [];
  for (let i = 0; i < book.length; i++) {
    arr.push(book[i].borrows);
  }

  let row = book.borrows;
  finalObject = row.forEach((row) => {
    for (let i = 0; i < accounts.length; i++) {
      if (row.id === accounts[i].id) {
        arr2.push({
          id: row.id,
          returned: row.returned,
          picture: accounts[i].picture,
          age: accounts[i].age,
          name: { first: accounts[i].name.first, last: accounts[i].name.last },
          company: accounts[i].company,
          email: accounts[i].email,
          registered: accounts[i].registered,
        });
      }
    }
  });
  for (let i = 0; i < 10; i++) {
    arr3.push(arr2[i]);
  }
  return arr3;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
