// A variável global
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Altere o código abaixo desta linha
function add(bookArr, bookName) {
  let newBookList = [];
  newBookList.push(...bookArr);
  newBookList.push(bookName);
  return newBookList;

  // Altere o código acima desta linha
}

// Altere o código abaixo desta linha
function remove(bookArr, bookName) {
  let newBookList = [];
  newBookList.push(...bookArr);
  const book_index = newBookList.indexOf(bookName);
  if (book_index >= 0) {

    newBookList.splice(book_index, 1);
    return newBookList;

    // Altere o código acima desta linha
    }
}