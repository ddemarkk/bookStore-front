import React, { Component } from "react";
import { Animated } from "react-animated-css";
import axios from 'axios';
import "./PasswordVerified.css";

class PasswordVerified extends Component {
  
  componentDidMount = () => {
    axios.get(`https://rocky-temple-95444.herokuapp.com/user/verifyPassword/${this.props.match.params.authToken}`, {    
    }).then(res => {
      localStorage.removeItem('access_token')
      console.log(res)
      console.log(this.props.match.params.authToken)
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
        </Animated>
      </div>
    );
  }
}

export default PasswordVerified;
