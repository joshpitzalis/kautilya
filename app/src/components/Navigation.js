import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Navigation extends Component {
  static propTypes = {}

  state = {}

  render() {
    return (
      <nav className="flex justify-between bb b--black-10 ">
        <h1>Kautilya</h1>

        <div className="flex-grow pa3 flex items-center">
          <a className="f6 link dib  dim mr3 mr4-ns" href="#0">
            About
          </a>
          <a className="f6 link dib  dim mr3 mr4-ns" href="#0">
            Sign In
          </a>
          <a
            className="f6 dib  bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20"
            href="#0"
          >
            Sign Up
          </a>
        </div>
      </nav>
    )
  }
}
