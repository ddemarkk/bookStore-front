import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";
import ChangePassword from "./ChangePassword/ChangePassword";
import axios from 'axios';
import "./UserProfile.css";

class UserProfile extends Component {
  state = {
    tab: "profile"
  };

  passwordState = () => this.setState({tab: 'password'})
  
  profileState = () => this.setState({tab: 'profile'})

  render() {
    return (
      <div className="profile-page ">
        <div className="back-image" />
        <Animated
          className="profile-container"
          animationIn="fadeIn"
          animationOut="fadeOut"
          isVisible={true}
        >
          <div  className="select-container">
                 
          <button id='profile-button' onClick={this.profileState}>Profile</button>
          <button id='password-button' onClick={this.passwordState}>Password</button>
          </div>
          <div className="editor-container">
            {this.state.tab === 'password' ? <ChangePassword/> : 
            this.state.tab === 'profile' ? <span style={{color: 'white'}}>OK</span> : ''}  
          </div>
        </Animated>
      </div>
    );
  }
}

export default UserProfile;
