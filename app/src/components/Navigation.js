import React, { Component } from 'react';
import PropTypes from 'prop-types';
import magnifyingGlass from '../images/search.svg';
import { Link } from 'react-router-dom';
export default class Navigation extends Component {
  static propTypes = {};

  state = {};

  render() {
    return (
      <nav className="flex justify-between bb b--black-10 w-75-ns center shadow-3 ph3 mt3 br1">
        <h1>Kautilya</h1>

        <div className="flex-grow pa3 flex items-center">
          <Link to="/about" className="f6 link dib  dim mr3 mr4-ns" href="#0">
            BOOKS
          </Link>
          <Link to="/about" className="f6 link dib  dim mr3 mr4-ns" href="#0">
            WRITERS
          </Link>
          <Link to="/about" className="f6 link dib  dim mr3 mr4-ns" href="#0">
            NEWS
          </Link>
          <Link to="/about" className="f6 link dib  dim mr3 mr4-ns" href="#0">
            CONTACT
          </Link>
        </div>
        <img src={magnifyingGlass} alt="" />
      </nav>
    );
  }
}
