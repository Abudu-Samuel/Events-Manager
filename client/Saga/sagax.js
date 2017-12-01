import { delay } from 'redux-saga';
import { put, takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import history from '../history';
// Our worker Saga: will perform the async tasks

const userUrl = 'http://localhost:8000/api/v1/users';
const userUrl2 = 'http://localhost:8000/api/v1/users/login';

// Sign up

/**
 *
 *
 * @export
 * @param {any} action
 */
export function* signUpAsync(action) {
    try {
        console.log('trying to connect...');
        const response = yield call(axios.post, userUrl, {
            username: action.payload.username,
            email: action.payload.email,
            password: action.payload.password,
            firstname: action.payload.firstname,
            lastname: action.payload.lastname
        });
        console.log(`i am coming frm bacend${data.response}`);
        history.push('/allevents');
    } catch (e) {
        console.log(e.response);
    }
}

/**
 *
 *
 * @export
 */
export function* watchSignUpAsync() {
    console.log('running!');
    yield takeEvery('SIGN_UP', signUpAsync);
}

// Sign in

/**
 *
 *
 * @export
 * @param {any} action
 */
export function* signInAsync(action) {
    try {
        console.log('trying to connect to login...');
        const response = yield call(axios.post, userUrl2, {
            username: action.payload.username,
            password: action.payload.password
        });
        console.log(`login guy${response}`);
        history.push('/');
    } catch (e) {
        console.log(e.response);
    }
}

/**
 *
 *
 * @export
 */
export function* watchSignInAsync() {
    console.log('running!');
    yield takeEvery('SIGN_IN', signInAsync);
}

/**
 *
 *
 * @export
 */
export default function* rootSaga() {
    yield [
        watchSignUpAsync(),
        watchSignInAsync()
    ];
}
