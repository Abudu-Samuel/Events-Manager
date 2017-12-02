import { combineReducers } from 'redux';

import userAccess from './userReducer';
import centers from './center';
import events from './event';

const rootReducer = combineReducers({
    userAccess,
    centers,
    events
});

export default rootReducer;
