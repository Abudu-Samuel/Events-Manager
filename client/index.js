import React from 'react';
import { render } from 'react-dom';
import jwt from 'jsonwebtoken';
import { Provider } from 'react-redux';
import Root from './routes';
import configStore from './store';
import { signInAction } from './actions/actionCreator';

const store = configStore();

const token = localStorage.getItem('x-access-token')
if (token) {
  store.dispatch(signInAction(jwt.decode(token)));
}

render(
  <Provider store={store}>
    <Root />
  </Provider>
  ,
  document.getElementById('app')
);
