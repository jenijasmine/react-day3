import React from 'react';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';


const App = () => {
    return (
        <div className="container">
            Welcome to react world!!!
            <div className='row'>
                <div className='col'>
                    <BookList />
                </div>
                <div className='col'>
                    <BookDetails />
                </div>
            </div>
        </div>
    )
}

export default App;
