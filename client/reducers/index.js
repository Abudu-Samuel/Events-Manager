import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import signIn from './userReducer';

const rootReducer = combineReducers({ signIn, routing: routerReducer });

export default rootReducer;
