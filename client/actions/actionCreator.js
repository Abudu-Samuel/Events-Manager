import axios from 'axios';
// import { Redirect } from 'react-router-dom';
import * as types from '../actionTypes/index';
import {
  logInSuccess,
  signUpSuccess,
  editEventSuccess,
  editCenterSuccess,
  addCenterSuccess,
  addEventSuccess
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
  types: types.LOG_OUT,
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
 *
 * @return {object} axios response and userData
 */
export const signIn = userData => dispatch =>
  axios.post('/api/v1/users/login', userData)
    .then((response) => {
      dispatch(signInAction(response.data));
      window.localStorage.setItem('x-access-token', response.data.token);
      // if(jwt.decode(response.data.token).isAdmin) {
      //   <Redirect to ='' />
      // }
      // if(!jwt.decode(response.data.token).isAdmin) {
      //   redirect('/')
      // }
      logInSuccess();
    })
    .catch((error) => {
      throw (error);
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
  axios.post('/api/v1/users/', userData)
    .then((response) => {
      dispatch(signUpAction(response.data));
      signUpSuccess();
    })
    .catch((error) => {
      throw (error);
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
  axios.post('/api/v1/centers/', centerData, {
    headers:
    {
      'x-access-token': localStorage.getItem('x-access-token')
    }
  })
    .then((response) => {
      dispatch(addCenterAction(response.data));
      addCenterSuccess();
    })
    .catch((error) => {
      throw (error);
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
  axios.get('/api/v1/centers/latest', {
    // headers:
    //  {
    //      'x-access-token': localStorage.getItem('x-access-token')
    //  }
  })
    .then((response) => {
      dispatch(getTrendingCentersAction(response.data));
    })
    .catch((error) => {
      throw (error);
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
  axios.get(`/api/v1/centers?page=${page}`, {
    headers:
     {
       'x-access-token': localStorage.getItem('x-access-token')
     }
  })
    .then((response) => {
      dispatch(getAllCentersAction(response.data));
    })
    .catch((error) => {
      throw (error);
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
  axios.get('/api/v1/events/latest', {
    // headers:
    // {
    //     'x-access-token': localStorage.getItem('x-access-token')
    // }
  })
    .then((response) => {
      dispatch(getPopularEventsAction(response.data));
    })
    .catch((error) => {
      throw (error);
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
  axios.get(`/api/v1/events?page=${page}`, {
    headers:
    {
      'x-access-token': localStorage.getItem('x-access-token')
    }
  })
    .then((response) => {
      console.log(response.data, '00000000000');
      dispatch(getAllEventsAction(response.data));
    })
    .catch((error) => {
      throw (error);
    });

export const singleCenterAction = centerData => ({
  type: types.GET_SINGLE_CENTER,
  centerData
});

export const singleCenter = centerid => dispatch =>
  axios.get(`/api/v1/centers/center/${centerid}`, {
    headers:
    {
      'x-access-token': localStorage.getItem('x-access-token')
    }
  })
    .then((response) => {
      dispatch(singleCenterAction(response.data));
    })
    .catch((error) => {
      throw (error);
    });

export const singleEventAction = eventData => ({
  type: types.GET_SINGLE_EVENT,
  eventData
});

export const singleEvent = eventId => dispatch =>
  axios.get(`/api/v1/events/${eventId}`, {
    headers:
    {
      'x-access-token': localStorage.getItem('x-access-token')
    }
  })
    .then((response) => {
      dispatch(singleEventAction(response.data));
    })
    .catch((error) => {
      throw (error);
    });

export const addEventAction = eventData => ({
  type: types.ADD_EVENT,
  eventData
});

export const addEvent = eventData => dispatch =>
  axios.post('/api/v1/events', eventData, {
    headers: {
      'x-access-token': localStorage.getItem('x-access-token')
    }
  })
    .then((response) => {
      dispatch(addEventAction(response.data));
      addEventSuccess();
    })
    .catch((error) => {
      throw (error);
    });

export const userEventsAction = eventData => ({
  type: types.GET_USER_EVENTS,
  eventData
});

export const userEvents = page => dispatch =>
  axios.get(`/api/v1/events/user/events?page=${page}`, {
    headers: {
      'x-access-token': localStorage.getItem('x-access-token')
    }
  })
    .then((response) => {
      console.log('I got called>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
      console.log(response.data.event);
      dispatch(userEventsAction(response.data.event));
    })
    .catch((error) => {
      throw (error);
    });

export const deleteEventAction = eventData => ({
  type: types.DELETE_EVENT,
  eventData
});

export const deleteEvent = eventid => dispatch =>
  axios.delete(`/api/v1/events/${eventid}`, {
    headers: {
      'x-access-token': localStorage.getItem('x-access-token')
    }
  })
    .then((response) => {
      dispatch(deleteEventAction(response.data));
    })
    .catch((error) => {
      throw (error);
    });

export const editEventAction = eventData => ({
  type: types.EDIT_EVENT,
  eventData
});

export const editEvent = eventData => (dispatch) => {
  const eventId = parseInt(eventData.eventId, 10);
  return axios.put(`/api/v1/events/${eventId}`, eventData.data, {
    headers: {
      'x-access-token': localStorage.getItem('x-access-token')
    }
  })
    .then((response) => {
      console.log(response, 'hjs');
      dispatch(editEventAction(response.data));
      editEventSuccess();
    })
    .catch((error) => {
      console.log(error);
      throw (error);
    });
};

export const editCenterAction = centerData => ({
  type: types.EDIT_CENTER,
  centerData
});

export const editCenter = centerData => (dispatch) => {
  const centerId = parseInt(centerData.centerId, 10);
  return axios.put(`/api/v1/centers/center/${centerId}`, centerData.data, {
    headers: {
      'x-access-token': localStorage.getItem('x-access-token')
    }
  })
    .then((response) => {
      console.log(response);
      dispatch(editEventAction(response.data));
      editCenterSuccess();
    })
    .catch((error) => {
      console.log(error);
      throw (error);
    });
};
