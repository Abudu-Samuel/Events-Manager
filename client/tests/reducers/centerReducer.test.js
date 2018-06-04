import expect from 'expect';
import centerReducer from '../../reducers/center';
import * as types from '../../actionTypes/index';

const initialState = {
  centerPage: '',
  centers: {
    center: {}
  }
};

describe('Center Reducers Tests', () => {
  describe('GET SINGLE CENTER REDUCER', () => {
    it('SHOULD SET CENTERDATA OBJECT WITH DATA', () => {
      expect(centerReducer(initialState, {
        type: types.GET_SINGLE_CENTER,
        centerData: {
          capacity: 12345,
          description: 'hello',
          price: 12345,
          name: 'asdfgh',
          id: 1,
          image: 'sdfghjkl.com',
          location: 'lkjhgfd',
          isAvailable: true,
          state: 'sdfghjkk'
        }
      })).toEqual({
        capacity: 12345,
        description: 'hello',
        price: 12345,
        name: 'asdfgh',
        id: 1,
        image: 'sdfghjkl.com',
        location: 'lkjhgfd',
        isAvailable: true,
        state: 'sdfghjkk'
      });
    });
  });

  describe('GET TRENDING CENTERS REDUCER', () => {
    it('SHOULD SET TRENDING CENTERS OBJECT WITH DATA', () => {
      expect(centerReducer(initialState, {
        type: types.GET_TRENDING_CENTERS,
        centerData: {
          capacity: 12345,
          description: 'hello',
          price: 12345,
          name: 'asdfgh',
          id: 1,
          image: 'sdfghjkl.com',
          location: 'lkjhgfd',
          isAvailable: true,
          state: 'sdfghjkk'
        }
      })).toEqual({
        ...initialState,
        centers: {
          capacity: 12345,
          description: 'hello',
          price: 12345,
          name: 'asdfgh',
          id: 1,
          image: 'sdfghjkl.com',
          location: 'lkjhgfd',
          isAvailable: true,
          state: 'sdfghjkk'
        }
      });
    });
  });

  describe('EDIT CENTER REDUCER', () => {
    it('SHOULD SET CENTERDATA OBJECT WITH UPDATED DATA', () => {
      expect(centerReducer(initialState, {
        type: types.EDIT_CENTER,
        centerData: {
          capacity: 12345,
          description: 'hello',
          price: 12345,
          name: 'asdfgh',
          id: 1,
          image: 'sdfghjkl.com',
          location: 'lkjhgfd',
          isAvailable: true,
          state: 'sdfghjkk'
        }
      })).toEqual({
        ...initialState,
        capacity: 12345,
        description: 'hello',
        price: 12345,
        name: 'asdfgh',
        id: 1,
        image: 'sdfghjkl.com',
        location: 'lkjhgfd',
        isAvailable: true,
        state: 'sdfghjkk'
      });
    });
  });


  describe('ADD CENTER REDUCER', () => {
    it('SHOULD SET CENTERDATA OBJECT WITH UPDATED DATA', () => {
      expect(centerReducer(initialState, {
        type: types.ADD_CENTER,
        centerData: {
          capacity: 12345,
          description: 'hello',
          price: 12345,
          name: 'asdfgh',
          id: 1,
          image: 'sdfghjkl.com',
          location: 'lkjhgfd',
          isAvailable: true,
          state: 'sdfghjkk'
        }
      })).toEqual({
        ...initialState,
        capacity: 12345,
        description: 'hello',
        price: 12345,
        name: 'asdfgh',
        id: 1,
        image: 'sdfghjkl.com',
        location: 'lkjhgfd',
        isAvailable: true,
        state: 'sdfghjkk'
      });
    });
  });

  describe('DEFAULT STATE REDUCER', () => {
    it('SHOULD RETURN PREVIOUS STATE IF ACTION TYPE IS NOT HANDLED', () => {
      expect(centerReducer(initialState, {
        type: 'SDREGTE'
      })).toEqual(initialState);
    });
  });

  describe('GET ALL CENTERS REDUCER', () => {
    it('SHOULD SET ALL CENTERS OBJECT WITH DATA', () => {
      expect(centerReducer(initialState, {
        type: types.GET_ALL_CENTERS,
        centerData: {
          capacity: 12345,
          description: 'hello',
          price: 12345,
          name: 'asdfgh',
          id: 1,
          image: 'sdfghjkl.com',
          location: 'lkjhgfd',
          isAvailable: true,
          state: 'sdfghjkk',
          pagination: {
            pages: 2
          }
        }
      })).toEqual({
        ...initialState,
        centers: {
          capacity: 12345,
          description: 'hello',
          price: 12345,
          name: 'asdfgh',
          id: 1,
          image: 'sdfghjkl.com',
          location: 'lkjhgfd',
          isAvailable: true,
          state: 'sdfghjkk',
          pagination: {
            pages: 2
          }
        },
        centerPage: 2
      });
    });
  });
});
