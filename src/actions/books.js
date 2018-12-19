//import uuid from "uuid";

export const addBook = ({
  id = "",
  title = "",
  content = "",
  categories = ""
} = {}) => ({
  type: "ADD_BOOK",
  payload:{
    id,
    title,
    categories,
    content
  }
});

export const removeBook = ({ id } = {}) => ({
  type: "REMOVE_BOOK",
  id
});

export const fetchBooks = (arr) => ({
  type: "FETCH_BOOKS",
  arr
});

export const filterBooks = (title) =>({
  type: "FILTER_BOOKS",
  title

})
