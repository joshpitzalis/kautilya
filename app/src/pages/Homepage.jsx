import React, { Component } from "react";
// import AuthorSlideshow from "../features/homepage/AuthorSlideshow";
import Bookshelf from "../features/homepage/Bookshelf";
import BookSlideshow from "../features/homepage/BookSlideshow";

class Homepage extends Component {
  render() {
    return (
      <div>
        <header>
          <BookSlideshow />
          <p className=" w-100 relative bottom-2 tc">scroll down</p>
        </header>
        <Bookshelf />
        {/* <AuthorSlideshow /> */}
      </div>
    );
  }
}

export default Homepage;
