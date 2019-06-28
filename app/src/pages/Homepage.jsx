import React, { Component } from "react";
import AuthorSlideshow from "../features/homepage/AuthorSlideshow";
import Bookshelf from "../features/homepage/Bookshelf";
import BookSlideshow from "../features/homepage/BookSlideshow";
import tarek from "../images/authors/tarekFatah.jpg";
import agnipariksha from "../images/bookCovers/Agnipariksha.jpg";
import realPashtun from "../images/bookCovers/TheRealPashtunQuestion.png";
import tragicIllusion from "../images/bookCovers/TheTragiclllusionOfAnIslamicState.png";

class Homepage extends Component {
  render() {
    return (
      <div>
        <header>
          <BookSlideshow>
            {realPashtun}
            {agnipariksha}
            {tragicIllusion}
          </BookSlideshow>
        </header>
        <Bookshelf />
        <AuthorSlideshow>{tarek}</AuthorSlideshow>
      </div>
    );
  }
}

export default Homepage;
