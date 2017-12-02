import * as types from '../actionTypes/index';

const centerAccess = (state = {}, action) => {
    switch (action.type) {
        case types.GET_ALL_CENTERS:
            return {
                ...state, ...action.centerData
            };
        default:
            return state;
    }
};

export default centerAccess;

