import * as types from '../actionTypes/index';

const eventAccess = (state = {}, action) => {
  switch (action.type) {
  case types.GET_USER_EVENTS:
    return {
      ...state, ...action.eventData
    };
  case types.GET_SINGLE_EVENT:
    return {
      ...action.eventData
    };
  case types.GET_POPULAR_EVENTS:
    return {
      ...state, ...action.eventData
    };
  case types.GET_ALL_EVENTS:
    return {
      ...state, ...action.eventData
    };
  case types.ADD_EVENT:
    return {
      ...state, ...action.eventData
    };
  default:
    return state;
  }
};

export default eventAccess;

