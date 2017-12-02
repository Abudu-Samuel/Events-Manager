import * as types from '../actionTypes/index';

const eventAccess = (state = {}, action) => {
    switch (action.type) {
        case types.GET_ALL_EVENTS:
            return {
                ...state, ...action.eventData
            };
        default:
            return state;
    }
};

export default eventAccess;

