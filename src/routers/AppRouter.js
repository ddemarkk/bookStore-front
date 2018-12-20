import React from "react";
import BooksPage from "../components/BookPage/BookPage";
import EditBook from "../components/EditBook/EditBook";
import BooksView from '../components/BookView/BooksView'
import { BrowserRouter, Route, Switch } from "react-router-dom";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={BooksPage} exact />
      <Route path="/editor" component={EditBook} />
      <Route path='/lister/:id' component={BooksView} />
    </Switch>
  </BrowserRouter>
);
export default AppRouter;