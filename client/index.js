import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Root from './routes';
import configStore from './store';

const store = configStore();
render(
    <Provider store={store}>
        <Root />
    </Provider>
    ,
    document.getElementById('app')
);
