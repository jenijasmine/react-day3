import { combineReducers } from 'redux';


const books = [
        {id: 1, title: 'Brief History of times', author: 'Stephen Hawking'},
        {id: 2, title: 'Ignited minds', author: 'APJ Abdul Kalam'},
        {id: 3, title: 'Java 2 Complete Reference', author: 'Herbert Schildt'},
        {id: 4, title: 'Da Vinci Code', author: 'Dan Brown'},
        {id: 5, title: 'The C++ Language', author: 'Bjarne Stroustrup'}
    ];


export function bookListReducer(bookList = books,action) {
    if(action.type === 'DELETE_BOOK'){
        return bookList.filter(book=> book.id !== action.payload.id)
    }
    return bookList;
}

export function selectedBookReducer(selectedBook = null, action) {
    if(action.type === 'SELECT_BOOK') {
        return action.payload;
    }
    if(action.type === 'DELETE_BOOK') {
        return (selectedBook && selectedBook.id === action.payload.id) ? null : selectedBook;
    }
    return selectedBook;
}

export default combineReducers({
    bookList: bookListReducer,
    selectedBook: selectedBookReducer
});