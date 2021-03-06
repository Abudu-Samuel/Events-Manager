import jwt from 'jsonwebtoken';
import instance from '../components/Utils/axios';
import * as types from '../actionTypes/index';
import {
  logInSuccess,
  signUpSuccess,
  editEventSuccess,
  editCenterSuccess,
  addCenterSuccess,
  addEventSuccess,
  successPrompter,
} from '../sweetAlert';

/**
 * @export signInAction
 *
 * @description Defines signInAction
 *
 * @param {object} userData
 *
 * @return {object} Action type and userdata
 */
export const signInAction = userData => ({
  type: types.SIGN_IN,
  userData
});

export const logOutAction = userData => ({
  type: types.LOG_OUT,
  userData
});

export const logout = () => (dispatch) => {
  localStorage.removeItem('x-access-token');
  dispatch(logOutAction({}));
};

/**
 * @export signIn
 *
 * @description Creates signIn thunk action
 *
 * @param {object} userData
//  *
 * @return {object} axios response and userData
 */
export const signIn = userData => dispatch =>
  instance.post('/api/v1/users/login', userData)
    .then((response) => {
      dispatch(signInAction(jwt.decode(response.data.token)));
      window.localStorage.setItem('x-access-token', response.data.token);
      logInSuccess();
    });

/**
 * @export signUpAction
 *
 * @description defines signUpAction
 *
 * @param {object} userData
 *
 * @return {object} Action type and userData
 */
export const signUpAction = userData => ({
  type: types.SIGN_UP,
  userData
});

/**
 * @export signUp
 *
 * @description Creates signUp thunk action
 *
 * @param {object} userData
 *
 * @return {object} Axios response and action type
 */
export const signUp = userData => dispatch =>
  instance.post('/api/v1/users/', userData)
    .then((response) => {
      dispatch(signUpAction(jwt.decode(response.data.token)));
      window.localStorage.setItem('x-access-token', response.data.token);
      signUpSuccess();
    });

/**
 * @export addCenterAction
 *
 * @description defines addCenterAction
 *
 * @param {object} centerData
 *
 * @return {object} Action type and centerData
 */
export const addCenterAction = centerData => ({
  type: types.ADD_CENTER,
  centerData
});

/**
 * @export addCenter
 *
 * @description  Creates addCenter thunk action
 *
 * @param {object} centerData
 *
 * @return {object} Axios response and action type
 */
export const addCenter = centerData => dispatch =>
  instance.post('/api/v1/centers/', centerData, {
    headers:
      {
        'x-access-token': localStorage.getItem('x-access-token')
      }
  })
    .then((response) => {
      dispatch(addCenterAction(response.data));
      addCenterSuccess();
    });

/**
 * @export getTrendingCentersAction
 *
 * @description defines getTrendingCentersAction
 *
 * @param {object} centerData
 *
 * @return {object} Action type and centerData
 */
export const getTrendingCentersAction = centerData => ({
  type: types.GET_TRENDING_CENTERS,
  centerData
});

/**
 * @export getTrendingCenters
 *
 *@description Creates thunk action
 *
 * @return {object} Axios response
 */
export const getTrendingCenters = () => dispatch =>
  instance.get('/api/v1/centers/latest')
    .then((response) => {
      dispatch(getTrendingCentersAction(response.data));
    });

/**
 * @export getAllCentersAction
 *
 * @description defines getAllCentersAction
 *
 * @param {object} centerData
 *
 * @return {object} action type and centerData
 */
export const getAllCentersAction = centerData => ({
  type: types.GET_ALL_CENTERS,
  centerData
});

/**
 * @export getAllCenters
 *
 * @description Creates getAllCenters thunk action
 *
 * @param {object} page
 *
 * @return {object} Axios response
 */
export const getAllCenters = page => dispatch =>
  instance.get(`/api/v1/centers?page=${page}`, {
    headers:
      {
        'x-access-token': localStorage.getItem('x-access-token')
      }
  })
    .then((response) => {
      dispatch(getAllCentersAction(response.data));
    });

/**
 * @export getPopularEventsAction
 *
 * @description defines getPopularEventsAction
 *
 * @param {object} eventData
 *
 * @return {object} action type and eventData
 */
export const getPopularEventsAction = eventData => ({
  type: types.GET_POPULAR_EVENTS,
  eventData
});

/**
 * @export getPopularEvents
 *
 * @description Creates getPopularEvents thunk action
 *
 * @return {object} Axios response
 */
export const getPopularEvents = () => dispatch =>
  instance.get('/api/v1/events/latest')
    .then((response) => {
      dispatch(getPopularEventsAction(response.data));
    });

/**
 * @export getAllEventsAction
 *
 * @description defines getAllEventsAction
 *
 * @param {object} eventData
 *
 * @return {object} Action type and eventData
 */
export const getAllEventsAction = eventData => ({
  type: types.GET_ALL_EVENTS,
  eventData
});

/**
 * @export getAllEvents
 *
 * @description Creates getAllEvents thunk action
 *
 * @param {object} page
 *
 * @return {object} Axios response
 */
export const getAllEvents = page => dispatch =>
  instance.get(`/api/v1/events?page=${page}`, {
    headers:
      {
        'x-access-token': localStorage.getItem('x-access-token')
      }
  })
    .then((response) => {
      dispatch(getAllEventsAction(response.data));
    });

export const singleCenterAction = centerData => ({
  type: types.GET_SINGLE_CENTER,
  centerData
});

export const singleCenter = centerid => dispatch =>
  instance.get(`/api/v1/centers/center/${centerid}`)
    .then((response) => {
      dispatch(singleCenterAction(response.data));
    });

export const singleEventAction = eventData => ({
  type: types.GET_SINGLE_EVENT,
  eventData
});

export const singleEvent = eventId => dispatch =>
  instance.get(`/api/v1/events/event/${eventId}`)
    .then((response) => {
      dispatch(singleEventAction(response.data));
    });

export const slatedEventAction = eventData => ({
  type: types.GET_SLATED_EVENT,
  eventData
});

export const slatedEvent = (eventId, page) => dispatch =>
  instance.get(`/api/v1/events/center/${eventId}?page=${page}`, {
    headers:
      {
        'x-access-token': localStorage.getItem('x-access-token')
      }
  })
    .then((response) => {
      dispatch(slatedEventAction(response.data));
    });

export const addEventAction = eventData => ({
  type: types.ADD_EVENT,
  eventData
});

export const addEvent = eventData => dispatch =>
  instance.post('/api/v1/events', eventData, {
    headers: {
      'x-access-token': localStorage.getItem('x-access-token')
    }
  })
    .then((response) => {
      dispatch(addEventAction(response.data));
      addEventSuccess();
    });

export const userEventsAction = eventData => ({
  type: types.GET_USER_EVENTS,
  eventData
});

export const userEvents = page => dispatch =>
  instance.get(`/api/v1/events/user/events?page=${page}`, {
    headers: {
      'x-access-token': localStorage.getItem('x-access-token')
    }
  })
    .then((response) => {
      dispatch(userEventsAction(response.data));
    });

export const deleteEventAction = eventData => ({
  type: types.DELETE_EVENT,
  eventData
});

export const deleteEvent = eventid => dispatch =>
  instance.delete(`/api/v1/events/event/${eventid}`, {
    headers: {
      'x-access-token': localStorage.getItem('x-access-token')
    }
  })
    .then((response) => {
      dispatch(deleteEventAction(response.data));
      successPrompter('Your event has been deleted successfully');
    });

export const editEventAction = eventData => ({
  type: types.EDIT_EVENT,
  eventData
});

export const editEvent = eventData => (dispatch) => {
  const eventId = parseInt(eventData.eventId, 10);
  return instance.put(`/api/v1/events/event/${eventId}`, eventData.data, {
    headers: {
      'x-access-token': localStorage.getItem('x-access-token')
    }
  })
    .then((response) => {
      dispatch(editEventAction(response.data));
      editEventSuccess();
    });
};

export const editCenterAction = centerData => ({
  type: types.EDIT_CENTER,
  centerData
});

export const editCenter = centerData => (dispatch) => {
  const centerId = parseInt(centerData.centerId, 10);
  return instance.put(`/api/v1/centers/center/${centerId}`, centerData.data, {
    headers: {
      'x-access-token': localStorage.getItem('x-access-token')
    }
  })
    .then((response) => {
      dispatch(editCenterAction(response.data));
      editCenterSuccess();
    });
};
