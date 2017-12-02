import axios from 'axios';
import * as types from '../actionTypes/index';

export function signInAction(userData) {
    return {
        type: types.SIGN_IN,
        userData
    };
}

export function signIn(userData) {
    return (dispatch) => axios.post('http://localhost:8000/api/v1/users/login', userData)
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
    return (dispatch) => axios.post('http://localhost:8000/api/v1/users/', userData)
        .then((response) => {
            dispatch(signUpAction(response.data));
        })
        .catch((error) => {
            throw (error);
        });
}

