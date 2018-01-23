import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Homepage from './components/Homepage/index.js';
import About from './components/About';
import Contact from './components/Contact';
import News from './components/News';
import Team from './components/Team';
// import Posts from './components/Posts';
import Books from './components/Books';
import Authors from './components/Authors';
import registerServiceWorker from './registerServiceWorker';
import PropTypes from 'prop-types';
import { BrowserRouter, Route } from 'react-router-dom';
import * as route from './constants/routes.js';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import './style.css';

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Navigation />
          <Route exact path={route.HOMEPAGE} component={() => <Homepage />} />
          <Route exact path={route.ABOUT} component={() => <About />} />
          <Route exact path={route.CONTACT} component={() => <Contact />} />
          <Route exact path={route.NEWS} component={() => <News />} />
          {/* <Route exact path={route.POSTS} component={() => <Posts />} /> */}
          <Route exact path={route.BOOKS} component={() => <Books />} />
          <Route exact path={route.AUTHORS} component={() => <Authors />} />
          <Route exact path={route.TEAM} component={() => <Team />} />
          {/* <Route exact  component={() => <ErrorPage />} /> */}
          <Footer />
        </Fragment>
      </BrowserRouter>
    );
  }
}

const ErrorPage = () => {
  return <section className="vh-100 bg-washed-blue baskerville">
  <header className="tc ph5 lh-copy">
      <h1 className="f1 f-headline-l code mb3 fw9 dib tracked-tight light-purple">404</h1>
      <h2 className="tc f1-l fw1">Sorry, we can't find the page you are looking for.</h2>
  </header>
  <p className="fw1 i tc mt4 mt5-l f4 f3-l">Are you looking for one of these?</p>
  <ul className="list tc pl0 w-100 mt5">
    <li className="dib"><a class="f5 f4-ns link black db pv2 ph3 hover-light-purple" href="/">Home</a></li>
    <li className="dib"><a class="f5 f4-ns link black db pv2 ph3 hover-light-purple" href="/about">About</a></li>
    <li className="dib"><a class="f5 f4-ns link black db pv2 ph3 hover-light-purple" href="/careers">Careers</a></li>
    <li className="dib"><a class="f5 f4-ns link black db pv2 ph3 hover-light-purple" href="/contact">Contact</a></li>
    <li className="dib"><a class="f5 f4-ns link black db pv2 ph3 hover-light-purple" href="/signup">Sign Up</a></li>
    <li className="dib"><a class="f5 f4-ns link black db pv2 ph3 hover-light-purple" href="/help">Help</a></li>
  </ul>
</section>
}
 


ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
