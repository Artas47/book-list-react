export  function selectBook(book) {
  // selectBook is an acttion creator, it needs to return an action,
  // an object with a type property
  console.log(`book selected   ${book.title}`);
    
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }

}