import * as types from '../actionTypes/index';

const defaultState = {
  isAuthenticated: !!localStorage.getItem('x-access-token')
}

const userAccess = (state = defaultState, action) => {
  switch (action.type) {
  case types.SIGN_IN:
  console.log('?????????', action)
    return {
      ...state,
      isAuthenticated: true,
      ...action.userData.token
    };
  case types.LOG_OUT:
    return {
      ...state,
      isAuthenticated: false
    }
  case types.SIGN_UP:
  console.log('?????????', action)
    return {
      ...state,
      isAuthenticated: true,
      ...action.userData.token
    };
  default:
    return state;
  }
};

export default userAccess;
