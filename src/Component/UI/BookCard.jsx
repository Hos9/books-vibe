import React from "react";
import { FaRegStar } from "react-icons/fa";

const BookCard = ({ book }) => {
  return (
    <div className="">
      <div className="card bg-base-200 p-10 shadow-sm">
        <figure>
          <img
            src={book.image}
            className=" bg-white p-10 rounded-3xl h-100"
            alt={book.bookName}
          />
        </figure>
        <div className="card-body">
          <div>
            {book.tags.map((tag, ind) => (
              <div key={ind} className="badge badge-accent mr-3 text-white">
                {tag}
              </div>
            ))}
          </div>
          <h2 className="card-title">{book.bookName}</h2>
          <p>By : {book.author}</p>
          <div className="border border-dashed my-4 border-gray-300"></div>
          <div className="card-actions justify-between">
            <div className="badge">{book.category}</div>
            <div className="flex gap-3 items-center">
              {book.rating} <FaRegStar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
