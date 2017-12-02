import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index';

/**
 * 
 * 
 * @param {any} initialState
 * @returns { object } configured store
 */
function configStore(initialState) {
  const combineEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
    return createStore(
        rootReducer,
        initialState,
        combineEnhancers(composeWithDevTools(applyMiddleware(thunk)))
    );
}

export default configStore;
