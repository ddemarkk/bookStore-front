import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { removeBook, fetchBooks } from "../../actions/books";
import React, { Component } from "react";
import axios from 'axios'
import './BooksView.css'
import './BooksView.media.css'
import { Animated } from 'react-animated-css'
class BooksView extends Component {

  onClickDelete = () => {
    axios.delete(`https://rocky-temple-95444.herokuapp.com/book/${this.props.book._id}`, {
      headers: { ['x-auth']: localStorage.getItem("access_token") }
    }).then(res => {
      const id = res.data.id
      this.props.removeBook({ id })
      this.props.history.push('/')
    })
  };

  componentDidMount() {
    axios.get('https://rocky-temple-95444.herokuapp.com/book').then(res => {
      this.props.fetchBooks(res.data)
      console.log(res)
    })
  }

  render() {
    return (
      <div className='books-container'>
        <div className='back-image' />
        {!this.props.book ?
          <div className='back-to-posts-button'>
            <Link to="/">Back to posts</Link>
          </div>
          :
          <Animated className='exact-post-container' animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
            <div className='butt-container'>
              <button id='delete-button' onClick={this.onClickDelete}>Delete post</button>
              <button id='back-button'>
                <Link id='link-back' to='/'>Back to Post</Link>
              </button>
            </div>
            <div className='content-container'>{this.props.book.description}</div>
          </Animated>
        }
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  book: state.books.find(book => book._id.toString() === props.match.params.id)
});

export default connect(mapStateToProps, { removeBook, fetchBooks })(BooksView);
