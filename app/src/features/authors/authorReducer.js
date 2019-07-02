import tarek from "../../images/authors/tarekFatah.jpg";

const authors = {
  1: {
    id: 1,
    name: `Tarek Fateh`,
    picture: tarek,
    about: "lorem Ipsum",
    books: [1, 2, 3],
    birthdate: "31 march 2019",
    birthplace: "Mumbai, India",
    quote: "something something"
  }
};

const writerReducer = (state = authors, action) => {
  return state;
};

export default writerReducer;
