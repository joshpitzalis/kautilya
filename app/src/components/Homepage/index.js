import React, { Component } from 'react'
import BookSlideshow from './BookSlideshow'
import AuthorSlideshow from './AuthorSlideshow'
import Bookshelf from './Bookshelf'
import realPashtun from '../../images/bookCovers/TheRealPashtunQuestion.png'
import agnipariksha from '../../images/bookCovers/Agnipariksha.jpg'
import tragicIllusion from '../../images/bookCovers/TheTragiclllusionOfAnIslamicState.png'

import tarek from '../../images/authors/tarekFatah.jpg'

class Homepage extends Component {
  render () {
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
    )
  }
}

export default Homepage
