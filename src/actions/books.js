//import uuid from "uuid";

export const addBook = ({
  id = "",
  name = "",
  content = "",
  categories = ""
} = {}) => ({
  type: "ADD_BOOK",
  payload:{
    id,
    name,
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

export const filterBooks = (name) =>({
  type: "FILTER_BOOKS",
  name

})
