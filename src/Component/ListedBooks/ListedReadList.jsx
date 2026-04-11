import React, { useContext } from "react";
import { BookContext } from "../../Context/BookCOntext";
import BookCard from "../UI/BookCard";

const ListedReadList = () => {
  const { storedBook, wishList } = useContext(BookContext);
  console.log(storedBook, wishList, "bookContext");

  if (storedBook.length === 0) {
    return (
      <div className="container mx-auto bg-base-200 text-center h-[50vh] flex items-center justify-center">
        <h1 className="font-bold text-3xl">
          No book(s) available in this list.
        </h1>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {storedBook.map((book, ind) => (
        <BookCard key={ind} book={book} />
      ))}
    </div>
  );
};

export default ListedReadList;
