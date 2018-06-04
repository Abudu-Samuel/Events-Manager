import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';
import * as types from '../../actionTypes/index';
import instance from '../../components/Utils/axios';
import centerMockedData from '../__mocks__/centerMockedData';
import { addCenter, getTrendingCenters, getAllCenters, singleCenter, editCenter } from '../../actions/actionCreator';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Center tests', () => {
  beforeEach(() => moxios.install(instance));
  afterEach(() => moxios.uninstall());

  describe('TEST FOR ADD CENTER', () => {
    it('CREATES ADD_CENTER UPON CREATING A CENTER', async (done) => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 201,
          response: centerMockedData.centerData
        });
      });
      const returnedActions = [
        {
          type: types.ADD_CENTER,
          centerData: centerMockedData.centerData,
        },
      ];
      const centerDetails = {
        name: 'test center',
        capacity: 123,
        location: 'yaba',
        price: 123456,
        state: 'lagos',
        description: 'Awesome center',
        image: 'testing.img',
        isAvailable: true
      };
      const store = mockStore({});
      await store.dispatch(addCenter(centerDetails));
      expect(store.getActions()).toEqual(returnedActions);
      done();
    });
  });

  describe('TEST FOR LATEST CENTERS ADDED', () => {
    it('CREATES GET_TRENDING_CENTERS UPON GETTING TO THE HOME PAGE', async (done) => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {
            message: 'centers found'
          }
        });
      });
      const returnedActions = [
        {
          type: types.GET_TRENDING_CENTERS,
          centerData: {
            message: 'centers found'
          },
        },
      ];
      const store = mockStore({});
      await store.dispatch(getTrendingCenters());
      expect(store.getActions()).toEqual(returnedActions);
      done();
    });
  });

  describe('TEST FOR GETTING ALL CENTERS', () => {
    it('CREATES GET_ALL_CENTERS UPON SIGNING IN', async (done) => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {
            message: 'centers found'
          }
        });
      });
      const returnedActions = [
        {
          type: types.GET_ALL_CENTERS,
          centerData: {
            message: 'centers found'
          },
        },
      ];
      const store = mockStore({});
      await store.dispatch(getAllCenters());
      expect(store.getActions()).toEqual(returnedActions);
      done();
    });
  });

  describe('TEST FOR GETTING A CENTER', () => {
    it('CREATES GET_SINGLE_CENTER', async (done) => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {
            message: 'center found',
            center: { name: 'The center' }
          }
        });
      });
      const returnedActions = [
        {
          type: types.GET_SINGLE_CENTER,
          centerData: {
            message: 'center found',
            center: { name: 'The center' }
          },
        },
      ];
      const store = mockStore({});
      await store.dispatch(singleCenter());
      expect(store.getActions()).toEqual(returnedActions);
      done();
    });
  });

  describe('TEST FOR EDITTING A CENTER', () => {
    it('EDIT_CENTER', async (done) => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: centerMockedData.centerData
        });
      });
      const returnedActions = [
        {
          type: types.EDIT_CENTER,
          centerData: centerMockedData.centerData
        },
      ];
      const centerDetails = {
        name: 'center',
        capacity: 123,
        location: 'yaba',
        price: 123456,
        state: 'lagos',
        description: 'Awesome center',
        image: 'testing.img',
        isAvailable: true
      };
      const store = mockStore({});
      await store.dispatch(editCenter(centerDetails));
      expect(store.getActions()).toEqual(returnedActions);
      done();
    });
  });
});

