import React, { useContext } from "react";
import { BookContext } from "../Context/BookCOntext";

const Books = () => {
  const { storedBook } = useContext(BookContext);
  console.log(storedBook, "bookContext");

  return (
    <div className="container mx-auto">
      <h1 className="">My Books</h1>
    </div>
  );
};

export default Books;
