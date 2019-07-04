import React from "react";
// import { FormattedMessage } from "react-intl";
import Overdrive from "react-overdrive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { animated, useSpring } from "react-spring";
import { useInterval } from "./helpers";
const Slideshow = () => {
  const books = useSelector(store => Object.values(store.books));

  const total = books.length;
  const [current, setCurrent] = React.useState(0);

  useInterval(() => {
    setCurrent(current + 1 === total ? 0 : current + 1);
  }, 5000);

  const bullets = Array(total).fill("○");
  bullets[current] = "●";

  return (
    <div className="flex flex-column items-center justify-center bg-light-blue vh-100">
      <>
        <FeaturedBook {...books[current]} />
        <div className="mt3">{bullets}</div>
      </>
    </div>
  );
};

export default Slideshow;

// bookId: 10,
//     coverImage: easy,
//     name: `Easy Motion Tourist`,
//     price: 225,
//     language: "english",
//     genre: [],
//     author: "Leye Adenle",
//     description: `Leye Adenle has written the book ‘Easy Motion Tourist’. The book is a compelling crime novel set in contemporary Lagos. It features Guy Collins, a British hack who stumbles into a murky underworld of the city. By the side of a club near one of the main hotels in Victoria Island, a woman’s body is found. As a potential suspect, a bystander named Collins is arrested by the police. After experiencing the unpleasant realities of a Nigerian Police cell, he is rescued by Amaka. The book delves into the dark side of Lagos with a narrative structure that feels fresh and an incredibly immersive atmosphere.`,
//     purchaseLink: null,
//     featured: false

const FeaturedBook = animated(
  ({ coverImage, author, description, name, bookId }) => {
    const fade = useSpring({
      from: { opacity: 0 },
      opacity: 1,
      config: { duration: 2000 }
    });

    return (
      <section className="flex flex-row pt5" style={fade}>
        <Link to={`/books/${bookId}`} className="pointer">
          <Overdrive id={bookId}>
            <figure>
              <img
                src={coverImage}
                className="shadow-1"
                height="350"
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
