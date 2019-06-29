import React, { Component } from "react";
import Overdrive from "react-overdrive";
import { Link } from "react-router-dom";
import agnipariksha from "../../images/bookCovers/Agnipariksha.jpg";
import realPashtun from "../../images/bookCovers/TheRealPashtunQuestion.png";
import tragicIllusion from "../../images/bookCovers/TheTragiclllusionOfAnIslamicState.png";

export default class Bookshelf extends Component {
  static propTypes = {};

  state = {};

  render() {
    return (
      <div className="bg-white">
        <h1 className="tc pv4">Bookshelf</h1>
        <div className="w-75-ns center grid">
          <Link to="/books">
            <Overdrive id="bookCover">
              <img src={realPashtun} alt="" height="200" />
            </Overdrive>
          </Link>
          <img src={agnipariksha} alt="" height="200" />
          <img src={tragicIllusion} alt="" height="200" />
          <img src={realPashtun} alt="" height="200" />
          <img src={agnipariksha} alt="" height="200" />
          <img src={tragicIllusion} alt="" height="200" />
          <img src={realPashtun} alt="" height="200" />
          <img src={agnipariksha} alt="" height="200" />
          <img src={tragicIllusion} alt="" height="200" />
          <img src={realPashtun} alt="" height="200" />
          <img src={agnipariksha} alt="" height="200" />
          <img src={tragicIllusion} alt="" height="200" />
          <img src={realPashtun} alt="" height="200" />
          <img src={agnipariksha} alt="" height="200" />
          <img src={tragicIllusion} alt="" height="200" />
          <img src={realPashtun} alt="" height="200" />
          <img src={agnipariksha} alt="" height="200" />
          <img src={tragicIllusion} alt="" height="200" />
          <img src={realPashtun} alt="" height="200" />
          <img src={agnipariksha} alt="" height="200" />
          <img src={tragicIllusion} alt="" height="200" />
          <img src={realPashtun} alt="" height="200" />
          <img src={agnipariksha} alt="" height="200" />
          <img src={tragicIllusion} alt="" height="200" />
        </div>
      </div>
    );
  }
}
