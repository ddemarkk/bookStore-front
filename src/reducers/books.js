export const booksReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return [...state, action.payload];

    case "REMOVE_BOOK":
      return state.filter(({id}) => id !== action.id);
      
    case "FETCH_BOOKS":
      return action.arr

    case "FILTER_BOOKS":
      return action.title

    default:
      return state;
  }
};
