import React, { Component } from "react";
import { Link } from "react-router";
import { Animated } from "react-animated-css";
import "./LoginPage.css";

class LoginPage extends Component {
  state = {
    email: "",
    password: ""
  };

  onChangeEmail = e => {
    let email = e.target.value;
    this.setState({ email });
  };

  onChangePassword = e => {
    let password = e.targer.value;
    this.setState({ password });
  };

  submitForm = (e) => {
    
  }

  render() {
    return (
      <div className="login-page ">
        <div className="back-image" />
        <Animated
          className="login-container"
          animationIn="fadeIn"
          animationOut="fadeOut"
          isVisible={true}
        >
          <h2 id="first-title">Login</h2>
          <form className="login-form" onSubmit={this.onSubmit}>
            <input
              placeholder="Email..."
              id="email"
              onChange={this.onChangeEmail}
            />
            <input
              placeholder="Password..."
              id="password"
              onChange={this.onChangePassword}
            />
            <button type='submit' id="login-button">
              <p id="button-text">Login</p>
            </button>
            <div id="cont">{this.props.books}</div>
          </form>
        </Animated>
      </div>
    );
  }
}

export default LoginPage;
