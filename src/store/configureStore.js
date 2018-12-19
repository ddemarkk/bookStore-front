import { combineReducers, createStore} from "redux";
import { booksReducer } from "../reducers/books";

export default () => {
  const store = createStore(
    combineReducers({
      books: booksReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};

// const persistConfig = {
//   key: 'root',
//   storage: storage,
//   whitelist: ['books']
// }

// const persistedReducer = persistReducer(persistConfig, booksReducer) 

//   export const store = createStore(combineReducers({
//     books: persistReducer(persistConfig, booksReducer),
//   }))
//   export const persistor = persistStore(store)
  
