import axios from 'axios';
import * as types from '../actionTypes/index';

export function signInAction(userData) {
  return {
    type: types.SIGN_IN,
    userData
  };
}

export function signIn(userData) {
  return (dispatch) => {
    return axios.post('http://localhost:8000/api/v1/users/login', userData)
    .then((response) => {
     dispatch(signInAction(response.data));
    })
    .catch((error) => {
      throw (error);
    })
  }
}
