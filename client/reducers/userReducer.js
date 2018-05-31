import * as types from '../actionTypes/index';

const defaultState = {
  isAuthenticated: false,
  userData: {}
};

const userAccess = (state = defaultState, action) => {
  switch (action.type) {
  case types.SIGN_IN:
    return {
      ...state,
      isAuthenticated: true,
      userData: action.userData
    };
  case types.LOG_OUT:
    return {
      ...state,
      isAuthenticated: false
    };
  case types.SIGN_UP:
    return {
      ...state,
      isAuthenticated: true,
      userData: action.userData
    };
  default:
    return state;
  }
};

export default userAccess;
