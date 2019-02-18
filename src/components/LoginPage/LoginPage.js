import React, { Component } from "react";
import { Link } from "react-router-dom";
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
  };

  submitForm = () => {
    const { email, password } = this.state;
    axios.post(`https://rocky-temple-95444.herokuapp.com/user/login`, {
      email,
      password
    }).then(res => {
      this.props.history.push('/')
      localStorage.setItem("access_token", res.data)
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
            Login
          </button>
          <Link id='signup-link' to='/signup'>Don't have an account? Sign Up</Link>
        </Animated>
      </div>
    );
  }
}

export default LoginPage;
