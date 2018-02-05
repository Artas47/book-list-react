import React, {Component} from 'react';
import {connect} from 'react-redux';


class BookDetail extends Component {
    render(){
        if(!this.props.book){
            return <div>select a book to get started </div>;
        }
        return(
            <div>
            <div>
               <h3>TITLE :</h3> {this.props.book.title}
            </div>
            <div>
            <h3>PAGES :</h3> {this.props.book.pages}
            </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state);
    
    return{
        book: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail);