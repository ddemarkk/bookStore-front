import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from 'axios'
import { fetchBooks, filterBooks } from '../../actions/books'
import './BookPage.css'
import './BookPage.media.css'
import { Animated } from 'react-animated-css'


class BooksPage extends Component {
  state = {
    name: ""
  }
  componentDidMount = async () => {
    await this.makeRequest()
  }

  compOut = () => {
    this.props.history.push('/editor')
  }

  makeRequest = async () => {
    await axios.get('https://rocky-temple-95444.herokuapp.com/book').then(res => {
      console.log(res)
      this.props.fetchBooks(res.data)
    })
    await axios.get(`https://rocky-temple-95444.herokuapp.com/user/${localStorage.getItem('access_token')}`).then(res => {
      console.log(res.data)
      this.setState({ name: res.data.name })
    })
  }

  onChange = (e) => {
    let filtered = this.props.book.filter(data => data.name.includes(e.target.value));

    if (filtered.length !== 0) this.props.filterBooks(filtered);

    if (filtered.length === 0) this.componentDidMount();

    if (e.target.value.length === 0) this.componentDidMount();
  }

  logOut = () => {
    localStorage.removeItem("access_token");
    this.props.history.push('/login')
  }
  render() {
    return (
      <div className='posts-page '>
        <div className='back-image' />
        <Animated className='posts-container' animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
          <h2 id='first-title'>Create a book</h2>
          <div className='posts-second-container'>
            <input placeholder='Search post...' id='search' onChange={this.onChange} />
            <button id="link-to-edit" onClick={this.compOut}>
              <p id='button-text'>Add post</p>
            </button>
            <span id="log-out">{}</span>
            <div id='cont'>{this.props.books}</div>
            {localStorage.getItem('access_token') ? <span style={{ color: 'white' }}>{this.state.name} <span id="log-out" onClick={this.logOut}>Log out</span></span> : ''}
          </div>
          <Link id='login-link' to='/signup'>Sign Up</Link>
          <Link id='login-link' to='/login'>Log in</Link>
        </Animated>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  books: state.books.map(book => (
    <Link id='link' to={`/lister/${book._id}`} key={book._id}>
      <ul id='posts'>
        <div id='title'>{book.name}</div>   <div id='content'>{book.description}</div>
      </ul>
    </Link>
  )),
  book: state.books
});

export default connect(mapStateToProps, { fetchBooks, filterBooks })(BooksPage);
