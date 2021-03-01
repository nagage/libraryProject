function getTotalBooksCount(books) {
  let arr = [];
  let total = books.forEach((book) => arr.push(book.id));
  return arr.length;
}

function getTotalAccountsCount(accounts) {
  let arr = [];
  let total = accounts.map((account) => arr.push(account.id));
  return arr.length;
}

function getBooksBorrowedCount(books) {
  let total = books.filter((book) => book.borrows[0].returned === false);
  return total.length;
}

function getMostCommonGenres(books) {
  objects = Object.values(books);
  let arr = [];
  let genres = objects.forEach((book) => arr.push(book.genre));
  let result = arr.reduce((tally, genre) => {
    if (!tally[genre]) {
      tally[genre] = 1;
    } else {
      tally[genre] = tally[genre] + 1;
    }
    return tally;
  }, {});
  let arr1 = [];
  for (let name in result) {
    count = result[name];
    arr1.push({ name, count });
  }
  let sorted = arr1.sort((a, b) => (a.count < b.count ? 1 : -1));
  return sorted.slice(0, 5);
}

function getMostPopularBooks(books) {
  let arr = [];
  let result = books.forEach((book) =>
    arr.push({ name: book.title, count: book.borrows.length })
  );
  let sorted = arr.sort((a, b) => (a.count <= b.count ? 1 : -1));
  return sorted.slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  let popularAuthors = [];
  for (let i = 0; i < books.length; i++) {
    let book = books[i];
    for (let j = 0; j < authors.length; j++) {
      let author = authors[j];
      if (author.id === book.authorId) {
        popularAuthors.push({
          name: `${author.name.first} ${author.name.last}`,
          count: book.borrows.length,
        });
      }
    }
  }
  let result = popularAuthors.sort(
    (authorA, authorB) => authorB.count - authorA.count
  );

  return result.slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
