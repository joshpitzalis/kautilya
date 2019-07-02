import React from "react";
import { Link } from "react-router-dom";
import { animated, useSpring } from "react-spring";

const Navigation = ({ setLocale, locale }) => {
  const [toggle, setToggle] = React.useState(false);

  const fade = useSpring({
    from: { opacity: 0 },
    opacity: 1
  });

  const mobileNavAnimation = useSpring({
    transform: toggle ? `translate3d(0,0,0)` : `translate3d(100%, 0,0)`
  });

  return (
    <animated.nav className="bg-transparent fixed w-100 z-999" style={fade}>
      <div className="flex justify-between items-center bb b--black-10 w-75-ns center shadow-3 br1 ph4 bg-white center  ">
        <Link to="/" className=" link dn dib-ns">
          <h1>Kautilya</h1>
        </Link>

        <Link to="/" className=" link dn-ns dib ">
          <h1>K</h1>
        </Link>

        <div className="pa3 flex-ns justify-end dn">
          <a
            // to="/books"
            className="f6 link dib  dim mr3 mr4-ns ttu"
            href="#bookshelf"
          >
            Books
          </a>
          <a
            // to="/authors"
            className="f6 link dib  dim mr3 mr4-ns ttu"
            href="#writers"
          >
            Writers
          </a>
          <Link to="/" className="f6 link dib  dim mr3 mr4-ns ttu" href="#0">
            Contact Us
          </Link>
        </div>
        <p
          className="f4 pointer dim grow"
          onClick={() => setLocale(locale === "en" ? "hi" : "en")}
        >
          {locale === "en" ? "हिंदी पुस्तकें" : "English Books"}
        </p>
        <div className="dn-ns dib" onClick={() => setToggle(!!!toggle)}>
          ●
        </div>
      </div>

      {/* {toggle && ( */}
      <animated.article
        className="vh-100  w-100 bg-dark-blue"
        style={mobileNavAnimation}
      >
        <div className="flex flex-column  justify-between white ">
          <Link to="/books" className="f2 link tc ttu light-blue mv4 pt4">
            Books
          </Link>
          <Link to="/authors" className="f2 link tc ttu light-blue mv4">
            Writers
          </Link>
          <Link to="/contact" className="f2 link tc ttu light-blue mv4">
            Contact Us
          </Link>
          <button
            className="mv4 tc f3 light-blue"
            onClick={() => setToggle(false)}
          >
            close
          </button>
        </div>
      </animated.article>
      {/* )} */}
    </animated.nav>
  );
};

export default Navigation;
