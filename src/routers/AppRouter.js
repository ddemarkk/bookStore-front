import React from "react";
import MainPage from '../components/MainPage/MainPage';
import EditPage from '../components/EditPage/EditPage';
import ViewPage from '../components/ViewPage/ViewPage'
import LoginPage from '../components/LoginPage/LoginPage'
import SignUpPage from '../components/SignUpPage/SignUpPage'
import UserProfile from '../components/UserProfile/UserProfile'
import PasswordVerified from '../components/UserProfile/PasswordVerified/PasswordVerified'
import { BrowserRouter, Route, Switch } from "react-router-dom";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={MainPage} exact />
      <Route path="/editor" component={EditPage} />
      <Route path='/lister/:id' component={ViewPage} />
      <Route path='/login' component={LoginPage} />
      <Route path='/signup' component={SignUpPage} />
      <Route path='/profile' component={UserProfile} />
      <Route path='/:authToken' component={PasswordVerified} />
    </Switch>
  </BrowserRouter>
);
export default AppRouter;
