import * as types from '../actionTypes/index';

const initialState = {
  deleteEvent: '',
  userEvents: [],
  singleEvent: {
    message: '',
    event: {}
  },
  popularEvent: [],
  allEvents: [],
  addEvent: ''

};

const eventAccess = (state = initialState, action = {}) => {
  switch (action.type) {
  case types.DELETE_EVENT:
    // return {
    //   ...state, ...action.eventData
    // };
    console.log(state, 'nvcn');
    return Object.assign({}, state, {
      userEvents: state.userEvents.filter(event => event.id !== action.eventData.eventFound.id)
    });
  case types.GET_USER_EVENTS:
    // return {
    //   ...state, ...action.eventData
    // };
    return Object.assign({}, state, {
      userEvents: action.eventData
    });
  case types.GET_SINGLE_EVENT:
    console.log(action.eventData);
    return (Object.assign(
      {},
      state,
      { event: action.eventData }
    ));
  case types.EDIT_EVENT:
    return {
      ...state, ...action.eventData
    };
  case types.GET_POPULAR_EVENTS:
    return {
      ...state, ...action.eventData
    };
  case types.GET_ALL_EVENTS:
  console.log('*********', action.eventData)
  return {
    ...state, ...action.eventData,
    // pages: action.eData.pages
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

