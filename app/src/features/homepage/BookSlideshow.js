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

  const count = useLoopedInterval(3000, books.length);

  const prevBookCollection = [...books];
  const prevBooks = [prevBookCollection.pop(), ...prevBookCollection];

  const nextBookCollection = [...books];
  const nextBooksFirstItem = nextBookCollection.shift();
  const nextBooks = [...nextBookCollection, nextBooksFirstItem];

  const bullets = Array(books.length).fill("○");
  bullets[count] = "●";

  return (
    <div className="flex flex-column items-center justify-center bg-light-blue vh-100-ns">
      <>
        <div className="flex items-center">
          <BackgroundBook book={prevBooks[count]} position="left" />
          <FeaturedBook {...books[count]} />
          <BackgroundBook book={nextBooks[count]} position="right" />
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
              {/* <figcaption className="hidden">By {author}</figcaption> */}
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

function BackgroundBook({ book, position }) {
  const { xaxis, opacity } = useSpring({
    from: { xaxis: 0, opacity: 0 },
    xaxis: 1,
    opacity: 0.75,
    config: { duration: 2000 }
  });

  return (
    <Link to={`/books/${book.bookId}`} className="pointer">
      <Overdrive id={book.bookId}>
        <figure>
          <animated.img
            src={book.coverImage}
            className="shadow-2  dn dib-ns"
            height="200"
            alt="alt"
            style={{
              opacity,
              transform: xaxis
                .interpolate({
                  range: [0, 1],
                  output: [0, 100]
                })
                .interpolate(
                  x =>
                    `translate3d(${
                      position === "left" ? "-" : "+"
                    }${x}%, 0,  0)`
                )
            }}
          />
          {/* <figcaption className="hidden">By {author}</figcaption> */}
        </figure>
      </Overdrive>
    </Link>
  );
}
