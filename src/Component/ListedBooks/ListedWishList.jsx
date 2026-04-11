import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../../Context/BookCOntext";
import BookCard from "../UI/BookCard";

const ListedWishList = ({ sortingType }) => {
  const { storedBook, wishList } = useContext(BookContext);
  console.log(storedBook, wishList, "bookContext");

  const [filteredWishList, setFilteredWishList] = useState(wishList);

  useEffect(() => {
    if (sortingType) {
      if (sortingType === "pages") {
        const sortedData = [...wishList].sort(
          (a, b) => a.totalPages - b.totalPages,
        );
        console.log(sortedData, "sortedData");
        setFilteredWishList(sortedData);
      } else if (sortingType === "rating") {
        const sortedData = [...wishList].sort((a, b) => a.rating - b.rating);
        console.log(sortedData, "sortedData");
        setFilteredWishList(sortedData);
      }
    }
  }, [sortingType, wishList]);

  if (filteredWishList.length === 0) {
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
      {filteredWishList.map((book, ind) => (
        <BookCard key={ind} book={book} />
      ))}
    </div>
  );
};

export default ListedWishList;
