import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

/**
 * @description configure store
 *
 * @param {function} initialState
 *
 * @return {object} created store
 */
function configStore(initialState) {
  const combineEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
  return createStore(
    rootReducer,
    initialState,
    combineEnhancers(composeWithDevTools(applyMiddleware(thunk, logger)))
  );
}

export default configStore;
