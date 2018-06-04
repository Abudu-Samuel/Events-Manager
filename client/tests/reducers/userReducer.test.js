import expect from 'expect';
import userReducer from '../../reducers/userReducer';
import * as types from '../../actionTypes/index';


const defaultState = {
  isAuthenticated: false,
};

describe('User Reducers Tests', () => {
  describe('SIGN IN REDUCER', () => {
    it('SHOULD SET STATUS KEY ON AUTHENTICATED TO BE TRUE', () => {
      expect(userReducer(defaultState, {
        type: types.SIGN_IN
      })).toEqual({
        ...defaultState,
        isAuthenticated: true,
      });
    });
  });

  describe('SIGN UP REDUCER', () => {
    it('SHOULD SET STATUS KEY ON AUTHENTICATED TO BE TRUE', () => {
      expect(userReducer(defaultState, {
        type: types.SIGN_UP
      })).toEqual({
        ...defaultState,
        isAuthenticated: true,
      });
    });
  });

  describe('SIGN OUT REDUCER', () => {
    it('SHOULD SET STATUS KEY ON AUTHENTICATED TO BE FALSE', () => {
      expect(userReducer(defaultState, {
        type: types.LOG_OUT
      })).toEqual({
        ...defaultState,
        isAuthenticated: false,
      });
    });
  });

  describe('DEFAULT STATE REDUCER', () => {
    it('SHOULD RETURN PREVIOUS STATE IF ACTION TYPE IS NOT HANDLED', () => {
      expect(userReducer(defaultState, {
        type: 'SDREGTE'
      })).toEqual(defaultState);
    });
  });
});
