import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';




class BookList extends Component{
  renderList(){
    return this.props.books.map((book) => {
      return(
        <li 
        onClick={() => this.props.selectBook(book)}
        key={book.title}
        className='list-group-item'> 
        {book.title}
        </li>
      );
    });
  }


  render(){
    return(
      <ul className='list-group col-sm-4'>
        {
          this.renderList()
        }
      </ul>
      )
    }
  }

function mapStateToProps(state){
  
  
  //Whatever is returend will show up as props inside of BookList
  return {
    books: state.books
  };
}

  //anything returned from this function will end up as props on the booklist container
function mapDispatchToProps(dispatch){
  
  //whenever selectbook is called , the result should be passed to all of our reducers
  return bindActionCreators({selectBook : selectBook}, dispatch);
}

// promote booklist from a component to a conetiner - it needs to know about this new dispatch method, selectbook.
// make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);