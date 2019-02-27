import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";
import axios from 'axios';
import "./ChangePassword.css";

class ChangePassword extends Component {
  state = {
    oldPassword: "",
    confirmPassword: "",
    newPassword: ""
  };
  componentDidMount = () => {
    axios.get(`https://rocky-temple-95444.herokuapp.com/user/${localStorage.getItem('access_token')}`, {
    }).then(res => {
      sessionStorage.setItem("_id", res.data._id);
      sessionStorage.setItem("name", res.data.name);
      sessionStorage.setItem("email", res.data.email)  
    })
  }

  oldPassword = e => {
    let oldPassword = e.target.value;
    this.setState({ oldPassword });
  };

  confirmPassword = e => {
    let confirmPassword = e.target.value;
    this.setState({ confirmPassword });
  };
  
  newPassword = e => {
    let newPassword = e.target.value;
    this.setState({ newPassword });
  };

  sendPasswords = () => {
    const { oldPassword, confirmPassword, newPassword } = this.state;
    axios.put(`https://rocky-temple-95444.herokuapp.com/user/changePassword/${sessionStorage.getItem('_id')}`, {
      oldPassword,
      confirmPassword,
      newPassword
    }).then(res => {
        console.log(res)
    })
  }

  render() {
    return (
      <div className="changePassword-container ">
          <input
            placeholder="Old password..."
            id="oldPassword"
            onChange={this.oldPassword}
          />
          <input
            placeholder="Confirm password..."
            id="confirmPassword"
            onChange={this.confirmPassword}
          />
          <input
            placeholder="New password..."
            id="newPassword"
            onChange={this.newPassword}
          />
          <button id="changePassword-button" onClick={this.sendPasswords}>
            Change Password
          </button>
      </div>
    );
  }
}

export default ChangePassword;
