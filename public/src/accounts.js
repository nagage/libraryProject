function findAccountById(accounts, id) {
  for (let i = 0; i < accounts.length; i++)
    if (accounts[i].id === id) {
      return accounts[i];
    }
}

function sortAccountsByLastName(accounts) {
  let sorted = accounts.sort((a, b) => (a.name.last > b.name.last ? 1 : -1));
  return sorted;
}

function getTotalNumberOfBorrows(account, books) {
  let result = 0;
  accountId = accountId(account);
  for (let i = 0; i < books.length; i++) {
    for (let j = 0; j < books[i].borrows.length; j++) {
      if (books[i].borrows[j].id == account.id) {
        result = result + 1;
      }
    }
  }
  return result;
}

function accountId(account) {
  return account.id;
}

function getBooksPossessedByAccount(account, books, authors) {
  let accountId = account.id;
  let checkedOut = [];
  let arr = [];
  let result = [];
  for (let i = 0; i < books.length; i++) {
    for (let j = 0; j < books[i].borrows.length; j++) {
      if (books[i].borrows[j].returned === false) {
        checkedOut.push({
          account: books[i].borrows[j].id,
          id: books[i].id,
          title: books[i].title,
          genre: books[i].genre,
          authorId: books[i].authorId,
          borrows: books[i].borrows,
        });
      }
    }
  }
  for (let i = 0; i < checkedOut.length; i++) {
    for (let j = 0; j < authors.length; j++) {
      if (checkedOut[i].authorId === authors[j].id) {
        arr.push({
          account: checkedOut[i].account,
          title: checkedOut[i].title,
          id: checkedOut[i].id,
          genre: checkedOut[i].genre,
          authorId: checkedOut[i].authorId,
          author: authors[j],
          borrows: checkedOut[i].borrows,
        });
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].account === accountId) {
      result.push({
        id: arr[i].id,
        title: arr[i].title,
        gerne: arr[i].genre,
        authorId: arr[i].authorId,
        author: arr[i].author,
        borrows: arr[i].borrows,
      });
    }
  }
  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
