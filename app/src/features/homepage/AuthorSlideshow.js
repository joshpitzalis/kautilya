import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useInterval } from "./helpers";

const Slideshow = () => {
  const authors = useSelector(store => Object.values(store.authors));

  const total = authors.length;
  const [current, setCurrent] = React.useState(0);

  useInterval(() => {
    setCurrent(current + 1 === total ? 0 : current + 1);
  }, 3000);

  const bullets = Array(total).fill("○");
  bullets[current] = "●";

  return (
    <div
      className="flex flex-column items-center pv4 bg-dark-blue o-75 white"
      id="writers"
    >
      <p className="f3 pv4">Our Writers</p>

      {authors &&
        authors.map(({ id, picture, name, about, quote, books }) => (
          <Link
            to={`author/${id}`}
            className="pointer flex flex-row no-underline white "
            key={id}
          >
            <div className="mr3 tr">
              <h3 className="f2">{name}</h3>
              <p>{about}</p>
              <div className="flex mv3">
                <hr className=" w-90" />
                <p className=" w-10">""</p>
              </div>
              <p>{quote}</p>
            </div>

            <img src={picture} className="shadow-1" height="300" />
            <div className="ml3 tl flex flex-column justify-between">
              <div>
                <h4>About</h4>
                <p>{about}</p>
              </div>

              <div>
                <h4>Books</h4>
                <p>{books}</p>
              </div>
              <p className="underline link white">Go to the writer's page...</p>
            </div>
          </Link>
        ))}

      <div className="mt4">{bullets}</div>
    </div>
  );
};

export default Slideshow;
