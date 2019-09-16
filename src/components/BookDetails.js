import React from 'react';
import { connect } from 'react-redux';

const BookDetails = props => {
    //console.log(props.selectedBook);
    if(!props.selectedBook) {
        return (
            <div>
                select any book
            </div>
        );
    }
        return (
        <div>
          Book Details
          <p>
              Title: {props.selectedBook.title}
              <br/>
              Author: {props.selectedBook.author}

          </p>
        </div>
    );
};

const mapStateToProps = state => ({selectedBook: state.selectedBook});

export default connect(mapStateToProps) (BookDetails);