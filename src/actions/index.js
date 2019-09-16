//Action creater
export function selectBook(book) {
    return {
        type: 'SELECT_BOOK',
        payload: book
    };
}

    export function deleteBook(book) {
        return {
            type: 'DELETE_BOOK',
            payload: book
        };
}