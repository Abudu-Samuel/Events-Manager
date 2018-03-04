import axios from 'axios';
import * as types from '../actionTypes/index';

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
  axios.get('/api/v1/centers/trend', {
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
 * @return {object} Axios response
 */
export const getAllCenters = () => dispatch =>
  axios.get('/api/v1/centers/', {
    // headers:
    //  {
    //      'x-access-token': localStorage.getItem('x-access-token')
    //  }
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
  axios.get('/api/v1/events/popular', {
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
 * @return {object} Axios response
 */
export const getAllEvents = () => dispatch =>
  axios.get('/api/v1/events/', {
    // headers:
    // {
    //     'x-access-token': localStorage.getItem('x-access-token')
    // }
  })
    .then((response) => {
      dispatch(getAllEventsAction(response.data));
    })
    .catch((error) => {
      throw (error);
    });

export const singleCenterAction = centerData => ({
  type: types.GET_SINGLE_CENTER,
  centerData
});

export const singleCenter = () => dispatch =>
  axios.get(`/api/v1/centers/1`, {
    headers:
    {
      'x-access-token': localStorage.getItem('x-access-token')
    }
  })
    .then((response) => {
      console.log(response.data);
      dispatch(singleCenterAction(response.data));
    })
    .catch((error) => {
      throw (error);
    });

export const singleEventAction = eventData => ({
  type: types.GET_SINGLE_EVENT,
  eventData
});

export const singleEvent = () => dispatch =>
  axios.get(`/api/v1/events/1`, {
    headers:
    {
      'x-access-token': localStorage.getItem('x-access-token')
    }
  })
    .then((response) => {
      console.log(response.data);
      console.log('==============================');
      console.log(response);
      dispatch(singleEventAction(response.data));
    })
    .catch((error) => {
      throw (error);
    });

