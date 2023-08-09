window.onload = () => {
  loadBookList();
};

const bookList = new Array();
bookList.push({
  bookName: "책1",
  author: "홍길동",
  publisher: "출판사1"
});
bookList.push({
  bookName: "책2",
  author: "김영희",
  publisher: "출판사2"
});
bookList.push({
  bookName: "책3",
  author: "김철수",
  publisher: "출판사2"
});

const loadBookList = () => {
  const bookListOl = document.querySelector('.book-list');
  
  bookListOl.innerHTML = bookList.map((book) => {
    return `
      <li>
        <span>${book.bookName}</span> | <span>${book.author}</span> | <span>${book.publisher}</span>
      </li>
    `;
  }).join("");
  
};
//////////////////
const addBookBtnOnClickHandle = () => {
  const book = {
      bookName: document.querySelector('.bookName-input').value,
      author: document.querySelector('.author-input').value,
      publisher: document.querySelector('.publisher-input').value 
    }
    bookList.push(book);
    loadBookList();
  };
  