import * as types from '../actionTypes/index';

const initialState = {
  centerPage: '',
  centers: {
    center: []
  }
};

const centerAccess = (state = initialState, action) => {
  switch (action.type) {
  case types.GET_SINGLE_CENTER:
    return {
      ...action.centerData
    };
  case types.GET_TRENDING_CENTERS:
    return {
      ...state,
      centers: action.centerData,
    };
  case types.EDIT_CENTER:
    return {
      ...state, ...action.centerData
    };
  case types.GET_ALL_CENTERS:
    return {
      ...state,
      centers: action.centerData,
      centerPage: action.centerData.pagination.pages
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

