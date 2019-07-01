import agnipariksha from "../../images/bookCovers/Agnipariksha.jpg";
import realPashtun from "../../images/bookCovers/TheRealPashtunQuestion.png";
import tragicIllusion from "../../images/bookCovers/TheTragiclllusionOfAnIslamicState.png";

const initialState = {
  1: {
    bookId: 1,
    coverImage: agnipariksha
  },
  2: {
    bookId: 2,
    coverImage: realPashtun
  },
  3: {
    bookId: 3,
    coverImage: tragicIllusion
  }
};

const bookReducer = (state = initialState, action) => {
  return state;
};

export default bookReducer;
