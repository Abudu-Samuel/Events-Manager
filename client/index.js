import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import Root from './routes';
import store from './store';

render(
    <Provider store={store}>
        <Root />
    </Provider>
    ,
    document.getElementById('app')
);
