import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Homepage from './components/Homepage/index.js';
import registerServiceWorker from './registerServiceWorker';
import PropTypes from 'prop-types';
import { BrowserRouter, Route } from 'react-router-dom';
import * as route from './constants/routes';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import './style.css';

export default class Routes extends Component {
  static propTypes = {};

  state = {};

  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Navigation />
          <Route exact path={route.HOMEPAGE} component={() => <Homepage />} />
          <Footer />
        </Fragment>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
