import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [storedBook, setStoredBook] = useState([]);

  const handleMarkAsRead = (currentBook) => {
    // Step:1 - Store book id
    // Step:2 - where to store
    const isExistBook = storedBook.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExistBook) {
      toast.error("The book is already exist!!");
    } else {
      toast(`${currentBook.bookName} is added in Read list`);
      setStoredBook([...storedBook, currentBook]);
    }
    // Step:2 - array or collection
    // Step:3 - if the book is already exist then show a alert or toast
    // Step:4 - If not the add to Read List array
    console.log(currentBook, storedBook, "book");
  };

  const data = {
    storedBook,
    setStoredBook,
    handleMarkAsRead,
  };

  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvider;
