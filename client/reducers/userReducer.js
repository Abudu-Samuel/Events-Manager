import * as types from '../actionTypes/index';

const userAccess = (state = {}, action) => {
    switch (action.type) {
        case types.SIGN_IN:
            return {
                ...state, ...action.userData
            };
          case types.SIGN_UP:
            return {
              ...state, ...action.userData
            }
        default:
            return state;
    }
};

export default userAccess;
