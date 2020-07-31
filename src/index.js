import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';

import reducers from "./reducers"
import Root from "./components/Root";

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Root store={store} />,
    document.querySelector('#root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
