import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from 'axios'
import { fetchBooks, filterBooks } from '../../actions/books'
import './MainPage.css'
import './MainPage.media.css'
import { Animated } from 'react-animated-css'


class MainPage extends Component {
  state = {
    name: ""
  }
  componentDidMount = async () => {
    await this.makeRequest();
  }

  compOut = () => {
    this.props.history.push('/editor');
  }

  makeRequest = async () => {
    await axios.get('https://rocky-temple-95444.herokuapp.com/book').then(res => {
      this.props.fetchBooks(res.data);
    })
    
    await axios.get(`https://rocky-temple-95444.herokuapp.com/user/${localStorage.getItem('access_token')}`).then(res => {
      this.setState({ name: res.data.name });

      sessionStorage.setItem('_id', res.data._id);
      sessionStorage.setItem('name', res.data.name);  
      sessionStorage.setItem('email', res.data.email);
      console.log(res)
    })

    axios.post(`https://rocky-temple-95444.herokuapp.com/cart/${sessionStorage.getItem('_id')}`).then(res => {
      console.log(res);
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

    sessionStorage.removeItem('_id');
    sessionStorage.removeItem('name');  
    sessionStorage.removeItem('email');
    
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
            {localStorage.getItem('access_token') ? 
              <div>
                <Link to='/profile' style={{ color: 'white' }}>{this.state.name}</Link> 
                <span id="log-out" style={{ color: 'white' }} onClick={this.logOut}>Log out</span>
              </div>
            :
              <div>
              <Link id='login-link' to='/signup'>Sign Up</Link><br></br>
              <Link id='login-link' to='/login'>Log in</Link>
              </div>
            }
          </div>
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

export default connect(mapStateToProps, { fetchBooks, filterBooks })(MainPage);
