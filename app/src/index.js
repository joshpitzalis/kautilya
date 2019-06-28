import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./features/Footer";
import Navigation from "./features/Navigation";
import Authors from "./pages/Authors";
import Books from "./pages/Books";
import Contact from "./pages/Contact";
import Homepage from "./pages/Homepage.jsx";
import registerServiceWorker from "./registerServiceWorker";
import "./styles/index.css";

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <main className="bg-light-blue pt3">
          <Navigation />
          <Switch>
            <Route exact path="/" component={() => <Homepage />} />
            <Route exact path="/contact" component={() => <Contact />} />
            <Route exact path="/books" component={() => <Books />} />
            <Route exact path="/authors" component={() => <Authors />} />
            <Route component={() => <ErrorPage />} />
          </Switch>
          <Footer />
        </main>
      </BrowserRouter>
    );
  }
}

const ErrorPage = () => {
  return (
    <section className="vh-100 bg-washed-blue baskerville">
      <header className="tc ph5 lh-copy">
        <h1 className="f1 f-headline-l code mb3 fw9 dib tracked-tight light-purple">
          404
        </h1>
        <h2 className="tc f1-l fw1">
          Sorry, we can't find the page you are looking for.
        </h2>
      </header>
      <p className="fw1 i tc mt4 mt5-l f4 f3-l">
        Are you looking for one of these?
      </p>
      <ul className="list tc pl0 w-100 mt5">
        <li className="dib">
          <a class="f5 f4-ns link black db pv2 ph3 hover-light-purple" href="/">
            Home
          </a>
        </li>
        <li className="dib">
          <a
            class="f5 f4-ns link black db pv2 ph3 hover-light-purple"
            href="/about"
          >
            About
          </a>
        </li>
        <li className="dib">
          <a
            class="f5 f4-ns link black db pv2 ph3 hover-light-purple"
            href="/careers"
          >
            Careers
          </a>
        </li>
        <li className="dib">
          <a
            class="f5 f4-ns link black db pv2 ph3 hover-light-purple"
            href="/contact"
          >
            Contact
          </a>
        </li>
        <li className="dib">
          <a
            class="f5 f4-ns link black db pv2 ph3 hover-light-purple"
            href="/signup"
          >
            Sign Up
          </a>
        </li>
        <li className="dib">
          <a
            class="f5 f4-ns link black db pv2 ph3 hover-light-purple"
            href="/help"
          >
            Help
          </a>
        </li>
      </ul>
    </section>
  );
};

ReactDOM.render(<Routes />, document.getElementById("root"));
registerServiceWorker();
