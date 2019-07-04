import React from "react";
import Overdrive from "react-overdrive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Books = ({ match }) => {
  const { coverImage, bookId, name, author, description, price } = useSelector(
    store => store.books[match.params.book]
  );

  return (
    <article className="w-75-ns center pv5 ">
      <div className="flex pt6">
        <Details
          name={name}
          author={author}
          price={price}
          description={description}
        />
        <Image coverImage={coverImage} bookId={bookId} name={name} />
      </div>
      <div className="flex mt5">
        <SideList />
      </div>
    </article>
  );
};

const Image = ({ coverImage, bookId, name }) => (
  <div className=" w-50-ns ">
    <Overdrive id={bookId} duration={1000}>
      <div className="flex justify-center items-center">
        <img height="500" alt={name} src={coverImage} />
      </div>
    </Overdrive>
  </div>
);

const Details = ({ name, author, price, description }) => (
  <header className=" w-50-ns pr4-ns pl4">
    <h1 className="f2 lh-title fw9 mb3 mt0 pt3 bt bw2">{name}</h1>
    <h2 className="f3 mid-gray lh-title">{author}</h2>
    <p className="f6 ttu tracked gray mv5">Rs. {price}</p>
    <p className="f5 lh-copy measure mt0-ns">{description}</p>
  </header>
);

const SideList = () => {
  const books = useSelector(store => Object.values(store.books));

  return (
    <div
      className="
    flex flex-column w-100"
    >
      <h3 class="link  w-100 bb b--black-10 pb2 mv4 dim">Similar Books</h3>

      <aside className="flex justify-between w-100">
        {books &&
          books
            .slice(0, 3)
            .map(({ bookId, coverImage, name, author, price }) => (
              <Link to={`/books/${bookId}`}>
                <article className="w5 flex justify-center">
                  <img src={coverImage} class="w-auto" height="200" />

                  <div class="flex flex-column justify-start pl2">
                    <h1 class="f6 f5-ns fw6 lh-title black mv0">{name}</h1>
                    <h2 class="f6 fw4 mt2 mb0 black-60">{author}</h2>
                    <dl class="mt2 f6">
                      <dt class="clip">Price</dt>
                      <dd class="ml0">Rs. {price}</dd>
                    </dl>
                  </div>
                </article>
              </Link>
            ))}
      </aside>
    </div>
  );
};

export default Books;
