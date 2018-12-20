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
  }

  componentDidMount = async () => {
    await this.makeRequest()
}

  compOut = () =>{
    this.props.history.push('/editor')
  }
  
  makeRequest = async () =>{
    const data = await axios.get('https://rocky-temple-95444.herokuapp.com/book')
    this.props.fetchBooks(data.data)
  }

  onChange = (e) =>{
    let filtered = this.props.book.filter(data => data.name.includes(e.target.value));
    
    if(filtered.length !== 0 ) this.props.filterBooks(filtered);
    
    if(filtered.length === 0 ) this.componentDidMount();
    
    if(e.target.value.length === 0) this.componentDidMount();
  }

  render() { 
    return (
      <div className='posts-page '>
        <div className='back-image'/>
        <Animated className='posts-container' animationIn="fadeIn" animationOut="fadeOut"  isVisible={true}>
          <h2 id='first-title'>Create a book</h2>
          <div className='posts-second-container'>
            <input placeholder='Search post...' id='search' onChange={this.onChange}/>
            <button id="link-to-edit" onClick={this.compOut}>
                <p id='button-text'>Add post</p>                
            </button>
            <div id='cont'>{this.props.books}</div>
          </div>         
        </Animated>   
        </div>
    );
  }
}
const mapStateToProps = (state, props) => ({
  books: state.books.map(book => (
    <Link id='link'to={`/lister/${book._id}`} key={book._id}>
        <ul id='posts'>
          <span id='title'>{book.name}</span>   <div id='content'>{book.description}</div>
        </ul>
    </Link>
  )),
  book: state.books
});

export default connect(mapStateToProps,{ fetchBooks, filterBooks })(BooksPage);
