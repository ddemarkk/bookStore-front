import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";
import axios from 'axios';
import "./SignUpPage.css";

class SignUpPage extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  };
  onChangeName = e => {
    let name = e.target.value;
    this.setState({ name });
  };

  onChangeEmail = e => {
    let email = e.target.value;
    this.setState({ email });
  };

  onChangePassword = e => {
    let password = e.target.value;
    this.setState({ password });
  };

  ConfirmPassword = e => {
    let confirmPassword = e.target.value;
    this.setState({ confirmPassword });
  };

  submitForm = () => {
    const { name, email, password, confirmPassword } = this.state;
    axios.post(`https://rocky-temple-95444.herokuapp.com/user`, {
      name,
      email,
      password,
      confirmPassword
    }).then(res => {
      console.log(res)
      this.props.history.push('/')
      localStorage.setItem("access_token", res.data)
    })


  }

  render() {
    return (
      <div className="signup-page ">
        <div className="back-image" />
        <Animated
          className="signup-container"
          animationIn="fadeIn"
          animationOut="fadeOut"
          isVisible={true}
        >
          <h2 id="first-title">Sign Up</h2>
          <form className="signup-form" >
            <input
              placeholder="Name..."
              id="name"
              onChange={this.onChangeName}
            />
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
            <input
              placeholder="Confirm Password..."
              id="confirm-password"
              onChange={this.ConfirmPassword}
            />
          </form>
          <button id="signup-button" onClick={this.submitForm}>
            Sign Up
          </button>
          <Link id='login-link' to='/login'>Already have an account? Log In</Link>
        </Animated>
      </div>
    );
  }
}

export default SignUpPage;
