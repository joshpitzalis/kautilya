import React from "react";
// import { FormattedMessage } from "react-intl";
import Overdrive from "react-overdrive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { animated, useSpring } from "react-spring";
import { useLoopedInterval } from "./helpers";

const Slideshow = () => {
  const books = useSelector(store =>
    Object.values(store.books).filter(book => book.featured === true)
  );

  const prevBooks = [...books];
  const nextBooks = [...books];
  const nextBooksFirstItem = nextBooks.shift();
  const count = useLoopedInterval(3000, books.length);
  const bullets = Array(books.length).fill("○");
  bullets[count] = "●";

  return (
    <div className="flex flex-column items-center justify-center bg-light-blue vh-100-ns">
      <>
        <div className="flex items-center">
          <img
            src={[prevBooks.pop(), ...prevBooks][count].coverImage}
            className="shadow-1 o-70"
            height="200"
            alt="alt"
            style={{ transform: "translate(-180px)" }}
          />
          <FeaturedBook {...books[count]} />
          <img
            src={[...nextBooks, nextBooksFirstItem][count].coverImage}
            className="shadow-1 o-70"
            height="200"
            alt="alt"
            style={{ transform: "translate(180px)" }}
          />
        </div>
        <div className="mt3">{bullets}</div>
      </>
    </div>
  );
};

export default Slideshow;

const FeaturedBook = animated(
  ({ coverImage, author, description, name, bookId }) => {
    const fade = useSpring({
      from: { opacity: 0 },
      opacity: 1,
      config: { duration: 2000 }
    });

    return (
      <section className="flex flex-row-ns flex-column pt5-ns pt6" style={fade}>
        <Link to={`/books/${bookId}`} className="pointer">
          <Overdrive id={bookId}>
            <figure>
              <img
                src={coverImage}
                className="shadow-1"
                height="400"
                alt="alt"
              />
              <figcaption className="hidden">By {author}</figcaption>
            </figure>
          </Overdrive>
        </Link>
        <div className="ml3 measure">
          <h1 className="f2">
            {name}
            {/* <FormattedMessage id="homepage.bookSlideShow.featured" /> */}
          </h1>
          <h2 className="f3  ">By {author}</h2>
          <p className="mt4 ">{description}</p>
        </div>
      </section>
    );
  }
);
