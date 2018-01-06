import React, { Component } from 'react'
import Slideshow from './Slideshow'
import realPashtun from '../../images/bookCovers/TheRealPashtunQuestion.png'
import agnipariksha from '../../images/bookCovers/Agnipariksha.jpg'
import tragicIllusion from '../../images/bookCovers/TheTragiclllusionOfAnIslamicState.png'

class Homepage extends Component {
  render () {
    return (
      <div>
        <header>
          <Slideshow>
            {realPashtun}
            {agnipariksha}
            {tragicIllusion}
          </Slideshow>
        </header>
        <h1>Our Bookshelf</h1>
      </div>
    )
  }
}

export default Homepage
