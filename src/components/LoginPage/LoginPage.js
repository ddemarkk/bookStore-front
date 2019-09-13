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
      localStorage.setItem("access_token", res.data)
      this.props.history.push('/')
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
        <div id="login-form">
          <input
            placeholder="Email..."
            id="email"
            onChange={this.onChangeEmail}
            style={{'left': '55px', 'width': '300px'}}
          />
          <input
            placeholder="Password..."
            id="password"
            onChange={this.onChangePassword}
            style={{'left': '55px', 'width': '300px'}}
          />

        </div>
          <p id="iii">...</p>

          <button id="login-button" 
          onClick={this.submitForm}
          style={{'right': '150px', 'width': '100px'}}
          >
            Login
          </button>
          <Link id='signup-link' to='/signup'>Don't have an account? Sign Up</Link>
        </Animated>
      </div>
    );
  }
}

export default LoginPage;
