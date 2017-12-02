import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index';

/**
 * 
 * 
 * @param {any} initialState
 * @returns { object } configured store
 */
function configStore(initialState) {
  const combineEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose; //eslint-disable-line
    return createStore(
        rootReducer,
        initialState,
        combineEnhancers(applyMiddleware(thunk))
    );
}

export default configStore;
