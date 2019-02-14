import React, { Component } from "react";
import { Link } from "react-router";
import { Animated } from "react-animated-css";
import axios from 'axios';
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
    let password = e.target.value;
    this.setState({ password });
    console.log(this.state.password)
  };

  submitForm = () => {
    const { email, password } = this.state;
    axios.post(`https://rocky-temple-95444.herokuapp.com/user/login`, {
      email,
      password
    }).then(res => {
      console.log(res);
    })


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
          <form className="login-form" >
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
            <button id="login-button" onClick={this.submitForm}>
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
