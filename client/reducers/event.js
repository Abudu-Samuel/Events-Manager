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
  addEvent: '',
  upcomingEventsData: {
    message: '',
    pagination: {},
    upcomingEvent: []
  },
  eventPage: '',
  events: {
    event: []
  },
};

const eventAccess = (state = initialState, action = {}) => {
  switch (action.type) {
  case types.DELETE_EVENT:
    // return {
    //   ...state, ...action.eventData
    // };
    return Object.assign({}, state, {
      userEvents: state.userEvents.filter(event => event.id !== action.eventData.eventFound.id)
    });
  case types.GET_USER_EVENTS:
    return {
      ...state,
      ...action.eventData,
      userEvents: action.eventData
    };

  case types.GET_SINGLE_EVENT:
    return (Object.assign(
      {},
      state,
      { event: action.eventData }
    ));
  case types.EDIT_EVENT:
    return {
      ...state, ...action.eventData
    };
  case types.GET_SLATED_EVENT:
    return {
      ...state,
      upcomingEventsData: action.eventData,
      eventPage: action.eventData.pagination.pages
    };
  case types.GET_POPULAR_EVENTS:
    return {
      ...state,
      events: action.eventData,
    };
  case types.GET_ALL_EVENTS:
    return {
      ...state,
      events: action.eventData,
      eventPage: action.eventData.pagination.pages
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

