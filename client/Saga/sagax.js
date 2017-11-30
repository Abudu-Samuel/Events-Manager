// import { delay } from 'redux-saga';
// import { put, takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import history from '../history';
// Our worker Saga: will perform the async tasks

const userUrl = 'http://localhost:8000/api/v1/users';

// Sign up

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
        console.log(`i am coming frm bacend${response.data}`);
        history.push('/allevents');
    } catch (e) {
        console.log(e.response);
    }
}

export function* watchSignUpAsync() {
    console.log('running!');
    yield takeEvery('SIGN_UP', signUpAsync);
}

// Sign in

export function* signInAsync(action) {
    try {
        console.log('trying to connect to login...');
        const response = yield call(axios.post, '/api/v1/users/login', {
            email: action.payload.email,
            password: action.payload.password
        });
        console.log(response);
        history.push('/');
    } catch (e) {
        console.log('ERROR!!!');
    }
}

export function* watchSignInAsync() {
    console.log('running!');
    yield takeEvery('SIGN_IN', signInAsync);
}

export default function* rootSaga() {
    yield [
        watchSignUpAsync(),
        watchSignInAsync()
    ];
}
