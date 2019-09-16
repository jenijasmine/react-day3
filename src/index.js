import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { createStore } from 'redux';

import reducer from './reducers/index';

import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// const store = createStore(reducer);
// console.log(store.getState());

ReactDOM.render(
    <Provider store= {createStore(reducer)}>
        <App/>
    </Provider>,
    document.getElementById('root')
);