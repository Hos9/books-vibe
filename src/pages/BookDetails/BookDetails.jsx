import React, { use } from "react";
import { useLoaderData, useParams } from "react-router";

// const booksPromise = fetch("/booksData.json").then((res) => res.json());

const BookDetails = () => {
  const { bookId: bookParamsId } = useParams();
  // console.log(bookId, "bookId");

  // const books = use(booksPromise);

  const books = useLoaderData();
  console.log(books, "Books");

  const expectedBook = books.find((book) => book.bookId == bookParamsId);
  console.log(expectedBook, "expectedBook");
  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = expectedBook;

  return (
    <div className="container mx-auto my-4 py-4">
      <div className="card lg:card-side bg-base-100 shadow-sm grid gap-10 grid-cols-2  justify-between">
        <figure className="bg-base-300">
          <img src={image} className="px-30 py-5 shadow-md" alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{bookName}</h2>
          <p>By : {author}</p>
          <p className="py-2 border-t-2 border-b-2 border-gray-300 flex items-center">
            {category}
          </p>
          <p className=" flex items-center">Review: {review}</p>
          <div className=" flex items-center gap-3 border-b-2 border-gray-300 py-4">
            <span className="font-bold">Tag </span>
            {tags.map((tag, ind) => (
              <div key={ind} className="badge badge-accent mr-3 text-white">
                #{tag}
              </div>
            ))}
          </div>
          <div className="space-y-3 py-5">
            <p className="grid grid-cols-3">
              <span>Number of Pages: </span>
              <span className="font-bold">{totalPages}</span>
            </p>
            <p className="grid grid-cols-3">
              <span>Publisher:</span>{" "}
              <span className="font-bold">{publisher}</span>
            </p>
            <p className="grid grid-cols-3 items-center">
              Year of Publishing:{" "}
              <span className="font-bold">{yearOfPublishing}</span>
            </p>
            <p className="grid grid-cols-3">
              Rating: <span className="font-bold">{rating}</span>
            </p>
          </div>
          <div className="card-actions justify-left flex items-center gap-7">
            <button className="btn btn-primary ">Read</button>
            <button className="btn btn-soft btn-info">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
