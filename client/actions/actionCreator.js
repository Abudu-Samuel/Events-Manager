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
export function signInAction(userData) {
  return {
    type: types.SIGN_IN,
    userData
  };
}

/**
 * @export signIn
 *
 * @description Creates signIn thunk action
 *
 * @param {object} userData
 *
 * @return {object} axios response and userData
 */
export function signIn(userData) {
  return (dispatch) => axios.post('/api/v1/users/login', userData)
    .then((response) => {
      dispatch(signInAction(response.data));
      window.localStorage.setItem('x-access-token', response.data.token);
    })
    .catch((error) => {
      throw (error);
    });
}

/**
 * @export signUpAction
 *
 * @description defines signUpAction
 *
 * @param {object} userData
 *
 * @return {object} Action type and userData
 */
export function signUpAction(userData) {
  return {
    type: types.SIGN_UP,
    userData
  };
}

/**
 * @export signUp
 *
 * @description Creates signUp thunk action
 *
 * @param {object} userData
 *
 * @return {object} Axios response and action type
 */
export function signUp(userData) {
  return (dispatch) => axios.post('/api/v1/users/', userData)
    .then((response) => {
      dispatch(signUpAction(response.data));
    })
    .catch((error) => {
      throw (error);
    });
}

/**
 * @export addCenterAction
 *
 * @description defines addCenterAction
 *
 * @param {object} centerData
 *
 * @return {object} Action type and centerData
 */
export function addCenterAction(centerData) {
  return {
    type: types.ADD_CENTER,
    centerData
  };
}

/**
 * @export addCenter
 *
 * @description  Creates addCenter thunk action
 *
 * @param {object} centerData
 *
 * @return {object} Axios response and action type
 */
export function addCenter(centerData) {
  return (dispatch) => axios.post('/api/v1/centers/', centerData, {
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
}

/**
 * @export getTrendingCentersAction
 *
 * @description defines getTrendingCentersAction
 *
 * @param {object} centerData
 *
 * @return {object} Action type and centerData
 */
export function getTrendingCentersAction(centerData) {
  return {
    type: types.GET_TRENDING_CENTERS,
    centerData
  };
}

/**
 * @export getTrendingCenters
 *
 *@description Creates thunk action
 *
 * @return {object} Axios response
 */
export function getTrendingCenters() {
  return (dispatch) => axios.get('/api/v1/centers/trend', {
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
}

/**
 * @export getAllCentersAction
 *
 * @description defines getAllCentersAction
 *
 * @param {object} centerData
 *
 * @return {object} action type and centerData
 */
export function getAllCentersAction(centerData) {
  return {
    type: types.GET_ALL_CENTERS,
    centerData
  };
}

/**
 * @export getAllCenters
 *
 * @description Creates getAllCenters thunk action
 *
 * @return {object} Axios response
 */
export function getAllCenters() {
  return (dispatch) => axios.get('/api/v1/centers/', {
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
}

/**
 * @export getPopularEventsAction
 *
 * @description defines getPopularEventsAction
 *
 * @param {object} eventData
 *
 * @return {object} action type and eventData
 */
export function getPopularEventsAction(eventData) {
  return {
    type: types.GET_POPULAR_EVENTS,
    eventData
  };
}

/**
 * @export getPopularEvents
 *
 * @description Creates getPopularEvents thunk action
 *
 * @return {object} Axios response
 */
export function getPopularEvents() {
  return (dispatch) => axios.get('/api/v1/events/popular', {
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
}

/**
 * @export getAllEventsAction
 *
 * @description defines getAllEventsAction
 *
 * @param {object} eventData
 *
 * @return {object} Action type and eventData
 */
export function getAllEventsAction(eventData) {
  return {
    type: types.GET_ALL_EVENTS,
    eventData
  };
}

/**
 * @export getAllEvents
 *
 * @description Creates getAllEvents thunk action
 *
 * @return {object} Axios response
 */
export function getAllEvents() {
  return (dispatch) => axios.get('/api/v1/events/', {
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
}

// /**
//  *
//  *
//  * @export
//  * @param {any} eventData
//  * @returns
//  */
// export function getSingleEventAction(eventData) {
//   return {
//     type: types.GET_SINGLE_EVENT,
//     eventData
//   };
// }

// /**
//  *
//  *
//  * @export
//  * @returns
//  */
// export function getSingleEvent() {
//   console.log('coming from backend');
//   //  const eventId = parseInt(':eventId', 10)
//   return (dispatch) => axios.get('api/v1/events/1', {
//     headers:
//     {
//       'x-access-token': localStorage.getItem('x-access-token')
//     }
//   })
//     .then((response) => {
//       dispatch(getSingleEventAction(response.data.event));
//       console.log('this is action', response.data.event);
//     })
//     .catch((error) => {
//       throw (error);
//     });
// }
