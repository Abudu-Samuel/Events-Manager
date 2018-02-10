import axios from 'axios';
import * as types from '../actionTypes/index';

export function signInAction(userData) {
    return {
        type: types.SIGN_IN,
        userData
    };
}

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

export function signUpAction(userData) {
    return {
        type: types.SIGN_UP,
        userData
    };
}

export function signUp(userData) {
    return (dispatch) => axios.post('/api/v1/users/', userData)
        .then((response) => {
            dispatch(signUpAction(response.data));
        })
        .catch((error) => {
            throw (error);
        });
}

export function addCenterAction(centerData) {
    return {
        type: types.ADD_CENTER,
        centerData
    };
}

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

export function getTrendingCentersAction(centerData) {
    return {
        type: types.GET_TRENDING_CENTERS,
        centerData
    };
}

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

export function getAllCentersAction(centerData) {
    return {
        type: types.GET_ALL_CENTERS,
        centerData
    };
}

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

export function getAllEventsAction(eventData) {
    return {
        type: types.GET_ALL_EVENTS,
        eventData
    };
}

export function getAllEvents() {
    return (dispatch) => axios.get('/api/v1/events/popular', {
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

export function getSingleEventAction(eventData) {
    return {
        type: types.GET_SINGLE_EVENT,
        eventData
    };
}

export function getSingleEvent() {
     console.log('coming from backend')
    //  const eventId = parseInt(':eventId', 10)
    return (dispatch) => axios.get('api/v1/events/1', {
        headers:
        {
            'x-access-token': localStorage.getItem('x-access-token')
        }
    })
    .then((response) => {
        dispatch(getSingleEventAction(response.data.event));
        console.log('this is action', response.data.event);
    })
    .catch((error) => {
        throw (error)
    })
}