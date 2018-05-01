import * as types from '../actionTypes/index';


const centerAccess = (state = {}, action) => {
  switch (action.type) {
  case types.GET_SINGLE_CENTER:
    return {
      ...action.centerData
    };
  case types.GET_TRENDING_CENTERS:
    return {
      ...state, ...action.centerData
    };
  case types.EDIT_CENTER:
    return {
      ...state, ...action.centerData
    };
  case types.GET_ALL_CENTERS:
    return {
      ...state,
      center: action.centerData.center,
      pages: action.centerData.pages
    };
  case types.ADD_CENTER:
    return {
      ...state, ...action.centerData
    };
  default:
    return state;
  }
};

export default centerAccess;

