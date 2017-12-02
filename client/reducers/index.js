import { combineReducers } from 'redux';

import userAccess from './userReducer';

const rootReducer = combineReducers({
    userAccess
});

export default rootReducer;
