import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook, deleteBook } from '../actions';

class BookList extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        //console.log(this.props);
        const booklist = this.props.books.map(
            book =><div className='row mb-2'
            //style={style}
            key={book.id}
            onClick={()=> this.props.selectBook(book)}>
                <div className='col-auto mr-auto'>
                    {book.title}
                </div>
                <div className='col-auto'>
                <button className="btn btn-danger" onClick={(e)=> {e.stopPropagation(); this.props.deleteBook(book); }}>
                    <i className='fa fa-trash'></i>
                    </button>
                    </div>
            </div>
            /* <li className='list-group-item' onClick ={() => this.props.selectBook(book)} key={book.id}>
                {book.title}
                <button onClick = {(e)=> {e.stopPropagation(); this.props.deleteBook(book)}}>X</button>
            </li> */
        );
        return (
        <div>
            Book List
            <ul className='list-group'>
                {booklist}
            </ul>
        </div>
        );
    }
}

const mapStateToProps = state => ({books: state.bookList});


export default connect(mapStateToProps, {selectBook: selectBook, deleteBook}) (BookList);