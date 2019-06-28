import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navigation extends Component {
  static propTypes = {};

  state = {};

  render() {
    return (
      <nav className="flex justify-between items-center bb b--black-10 w-75-ns center shadow-3 ph3 br2 bg-white">
        <h1>Kautilya</h1>
        <div className="pa3 flex justify-end">
          <Link to="/books" className="f6 link dib  dim mr3 mr4-ns" href="#0">
            BOOKS
          </Link>
          <Link to="/authors" className="f6 link dib  dim mr3 mr4-ns" href="#0">
            WRITERS
          </Link>

          <Link to="/contact" className="f6 link dib  dim mr3 mr4-ns" href="#0">
            CONTACT
          </Link>
        </div>
      </nav>
    );
  }
}
