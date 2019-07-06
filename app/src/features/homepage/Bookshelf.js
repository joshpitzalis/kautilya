import React from "react";
// import Overdrive from "react-overdrive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Bookshelf = () => {
  const books = useSelector(store => Object.values(store.books));
  return (
    <div className="bg-white" id="bookshelf">
      <h2 className="tc pv5 f1">Bookshelf</h2>
      <div className="w-75-ns center flex flex-wrap pb5 justify-around ">
        {books &&
          books.map(({ bookId, coverImage, name }) => (
            <Link
              to={`/books/${bookId}`}
              className="ma3 w4 pointer grow shadow-1 pa1"
              key={bookId}
            >
              {/* <Overdrive id={bookId.toString()}> */}
              <img src={coverImage} alt={name} height="250" />
              {/* </Overdrive> */}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Bookshelf;
