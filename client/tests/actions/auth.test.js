import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';
import * as types from '../../actionTypes/index';
import instance from '../../components/Utils/axios';
import userMockedData from '../__mocks__/userMockedData';
import { signIn, logout, signUp } from '../../actions/actionCreator';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('User tests', () => {
  beforeEach(() => moxios.install(instance));
  afterEach(() => moxios.uninstall());

  describe('TEST FOR USER SIGN IN', () => {
    it('CREATES LOGIN_RESOLVED UPON LOGGING A USER IN', async (done) => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: userMockedData.loginSuccess
        });
      });
      const returnedActions = [
        {
          type: types.SIGN_IN,
          userData: userMockedData.userData
        },
      ];
      const userDetails = {
        username: 'efosaokpugie@gmail.com',
        password: 'swampious',
      };
      const store = mockStore({});
      await store.dispatch(signIn(userDetails));
      expect(store.getActions()).toEqual(returnedActions);
      done();
    });
  });

  describe('TEST FOR USER LOG OUT', () => {
    it('CREATES USER LOG_OUT', async (done) => {
      const returnedActions = [
        {
          type: types.LOG_OUT,
          userData: {}
        }
      ];
      const store = mockStore({});
      await store.dispatch(logout());
      expect(store.getActions()).toEqual(returnedActions);
      done();
    });
  });

  describe('TEST FOR USER SIGN UP', () => {
    it('CREATE SIGN_UP RESOLVED UPON CREATING A USER', async (done) => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 201,
          response: userMockedData.loginSuccess
        });
      });
      const returnedActions = [
        {
          type: types.SIGN_UP,
          userData: userMockedData.userData
        }
      ];
      const userDetails = {
        email: 'testing@gmail.com',
        password: 'password',
        firstname: 'semo',
        lastname: 'babasemo',
        isAdmin: false
      };
      const store = mockStore({});
      await store.dispatch(signUp(userDetails));
      expect(store.getActions()).toEqual(returnedActions);
      done();
    });
  });
});
