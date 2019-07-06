import React from "react";
import { animated, useSpring } from "react-spring";

const Footer = () => {
  return (
    <footer className="pv4 pv5-l black-70 bt b--black-10 bg-white">
      <div className="w-75-ns w-100 center">
        <Navigation />
        <div className="flex-ns items-center justify-between">
          <Catalogue />
          <SocialMedia />
        </div>
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;

const Navigation = () => {
  return (
    <div className="mb4-l dn db-ns">
      <div className="flex justify-start">
        <h2 className="f6 fw6 ttu tracked mb4">Delivery</h2>

        <h2 className="f6 fw6 ttu tracked mb4 ph5">Terms & Conditions</h2>

        <h2 className="f6 fw6 ttu tracked mb4 ">Contact</h2>
      </div>
      <hr className="o-50" />
    </div>
  );
};

const SocialMedia = () => {
  return (
    <div className="flex flex-column w-25-ns">
      <p className="f3 tc dn db-ns">Follow Us</p>
      <div className=" black-70 flex justify-center mt4">
        <a
          href="https://www.facebook.com/"
          className="link dim dib mr3 black-70 pl2"
          title="Impossible Labs on Facebook"
        >
          <svg
            className="db w2 h2"
            data-icon="facebook"
            viewBox="0 0 32 32"
            fill="currentColor"
          >
            <title>facebook icon</title>
            <path d="M8 12 L13 12 L13 8 C13 2 17 1 24 2 L24 7 C20 7 19 7 19 10 L19 12 L24 12 L23 18 L19 18 L19 30 L13 30 L13 18 L8 18 z" />
          </svg>
        </a>
        <a
          href="https://twitter.com/"
          className="link dim dib mr3 black-70 pl3"
        >
          <svg
            className="db w2 h2"
            data-icon="twitter"
            viewBox="0 0 32 32"
            fill="currentColor"
          >
            <title>twitter icon</title>
            <path d="M2 4 C6 8 10 12 15 11 A6 6 0 0 1 22 4 A6 6 0 0 1 26 6 A8 8 0 0 0 31 4 A8 8 0 0 1 28 8 A8 8 0 0 0 32 7 A8 8 0 0 1 28 11 A18 18 0 0 1 10 30 A18 18 0 0 1 0 27 A12 12 0 0 0 8 24 A8 8 0 0 1 3 20 A8 8 0 0 0 6 19.5 A8 8 0 0 1 0 12 A8 8 0 0 0 3 13 A8 8 0 0 1 2 4" />
          </svg>
        </a>
      </div>
    </div>
  );
};

const Catalogue = () => {
  const [visible, setVisibility] = React.useState(true);

  const fade = useSpring({
    opacity: visible ? 0 : 1,
    config: { duration: 1500 }
  });
  return (
    <section className="mb5 ">
      {visible ? (
        <div className="mt5 pa3" style={fade}>
          <button
            className="f4 link dim br1 ba bw1 ph3 pt2 pb1 b--near-black near-black tracked ttu pointer"
            onClick={() => setVisibility(false)}
          >
            Download Our Catalogue
          </button>
          <p className="measure-wide mt4 near-black o-50">
            Kautilya Books is an independent publishing house based in New
            Delhi. Kautilya was created to encourage public discourse on matters
            of the state and policy-making in contemporary India. Founded in
            July 2014, Kautilya has published academic books on geopolitical
            issues in Hindi and English. Our endeavour is to bring forth titles
            related to the economy, governance, environment, politics and
            society in various languages.
          </p>
        </div>
      ) : (
        <animated.div style={fade} className="mb4 mb0-ns mt5">
          <p className="f5 fw6 mb2  mv3">Download Our Catalogue...</p>
          <input
            placeholder="Email Address"
            className="mw-100 w-100 w5-ns f5 input-reset ba b--black-20 pv3 ph4 border-box"
          />
          <input
            type="submit"
            className="input-reset w-100 w-auto-ns bg-black-80 white f5 pv2 pv3-ns ph4 ba b--black-80 bg-hover-mid-gray"
          />
        </animated.div>
      )}
    </section>
  );
};

const Copyright = () => {
  return (
    <div className="flex items-center mt4">
      <p className="f7 black-70 tc w-25-ns w-100">
        Copyright © Your Company 2038
      </p>
      <hr className="o-50 w-75-ns dn dib-ns" />
    </div>
  );
};
