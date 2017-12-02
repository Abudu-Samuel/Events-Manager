import { combineReducers } from 'redux';

import userAccess from './userReducer';
import centers from './center';

const rootReducer = combineReducers({
    userAccess,
    centers
});

export default rootReducer;
