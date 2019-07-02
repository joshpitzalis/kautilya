import { combineReducers } from "redux";
import authors from "../features/authors/authorReducer";
import books from "../features/books/booksReducer";

export default combineReducers({ books, authors });
