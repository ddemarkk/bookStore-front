import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addBook } from "../../actions/books";
import axios from 'axios';
import './EditBook.css'
import './EditBook.media.css'
import { Animated } from 'react-animated-css'

class EditBook extends Component {
  state = {
    name: "",
    description: "",
    year: "",
    alert: ""
  };

  onClickSend = (e) => {
      const { name, description } = this.state;
      if(this.state.description.length !== 0 && this.state.name.length !== 0){
        axios.post(`https://rocky-temple-95444.herokuapp.com/book`, {
          name, 
          description
        }, {
          headers: {['x-auth']: process.env.REACT_APP_USER_TOKEN}
        }).then(res => {
          this.props.history.push('/');
        });
      } else {
      this.setState({alert: 'Enter something'})
    }
  };

  // onClickAdd = () => {
  //   const { title, content, categories } = this.state;
  //   console.log(this.props.addBook);
  //   //const book = {title, description}
  //   this.props.addBook({ title, categories, content });
  //   //console.log(this.props.addBook({ title, description }));
  // };

  onChangeName = e => {
    let name = e.target.value;
    this.setState({ name });
  };

  onChangeDescription = e => {
    let description = e.target.value;
    this.setState({ description });
  };

  render() {
    return (
      <div className='edit-container'>
        <div className='back-image'/>
        <Animated className='editors-container' animationIn="fadeIn" animationOut="fadeOut"  isVisible={true}>
          <h2 id='edit-title'>Create your book</h2>
          <p style={{color: 'red'}}>{this.state.alert}</p>
          <input id='edit-input' placeholder="Name..." onChange={this.onChangeName} />
          <textarea placeholder='Start to write something...' id='content-area'name="text" onChange={this.onChangeDescription} />
            <div className='butt-container'>
              <button id='send-button' onClick={this.onClickSend}>
                Save
              </button>
              <button id='cancel-button'>
                <Link id="link-to-start" to="/">
                  Cancel
                </Link>
              </button>
            </div>
        </Animated>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addBook: payload => dispatch(addBook(payload))
});
export default connect(null,mapDispatchToProps)(EditBook);
