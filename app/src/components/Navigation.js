import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Search from '../images/Search';
import { Link } from 'react-router-dom';
export default class Navigation extends Component {
  static propTypes = {};

  state = {};

  render() {
    return (
      <nav className="flex justify-between items-center bb b--black-10 w-75-ns center shadow-3 ph3 mt3 br2">
        <h1>Kautilya</h1>
        <div className="flex-grow pa3 flex items-center">
        <Link to="/about" className="f6 link dib  dim mr3 mr4-ns" href="#0">
            ABOUT
          </Link>
          
          <Link to="/books" className="f6 link dib  dim mr3 mr4-ns" href="#0">
            BOOKS
          </Link>
          <Link to="/authors" className="f6 link dib  dim mr3 mr4-ns" href="#0">
            WRITERS
          </Link>
          <Link to="/news" className="f6 link dib  dim mr3 mr4-ns" href="#0">
            NEWS
          </Link>
          <Link to="/team" className="f6 link dib  dim mr3 mr4-ns" href="#0">
            TEAM
          </Link>
          <Link to="/contact" className="f6 link dib  dim mr3 mr4-ns" href="#0">
            CONTACT
          </Link>
        </div>
        <Search />
      </nav>
    );
  }
}
