import React from "react";
import Overdrive from "react-overdrive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Bookshelf = () => {
  const books = useSelector(store => Object.values(store.books));
  return (
    <div className="bg-white">
      <h2 className="tc pv4 f1">Bookshelf</h2>
      <div className="w-75-ns center flex wrap pv5">
        {books &&
          books.map(({ bookId, coverImage }) => (
            <Link to={`/books/${bookId}`} className="ma3">
              <Overdrive id={bookId}>
                <img src={coverImage} alt="" height="200" />
              </Overdrive>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Bookshelf;
