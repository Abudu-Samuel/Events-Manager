import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';
import * as types from '../../actionTypes/index';
import instance from '../../components/Utils/axios';
import eventMockedData from '../__mocks__/eventMockedData';
import { getPopularEvents, getAllEvents, singleEvent, slatedEvent, addEvent, userEvents, deleteEvent, editEvent } from '../../actions/actionCreator';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Event tests', () => {
  beforeEach(() => moxios.install(instance));
  afterEach(() => moxios.uninstall());

  describe('TEST FOR LATEST EVENTS ADDED', () => {
    it('CREATES GET_POPULAR_EVENTS UPON GETTING TO THE HOME PAGE', async (done) => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {
            message: 'Events found',
            events: eventMockedData.eventData
          }
        });
      });
      const returnedActions = [
        {
          type: types.GET_POPULAR_EVENTS,
          eventData: {
            message: 'Events found',
            events: eventMockedData.eventData
          },
        },
      ];
      const store = mockStore({});
      await store.dispatch(getPopularEvents());
      expect(store.getActions()).toEqual(returnedActions);
      done();
    });
  });

  describe('TEST FOR GETTING ALL EVENTS', () => {
    it('CREATES GET_ALL_EVENTS UPON SIGNING IN', async (done) => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {
            message: 'events found',
            event: [{
              title: 'evento',
              date: '2018-12-06',
              type: 'wedding',
              image: 'image.png',
              description: 'awesome'
            },
            {
              title: 'test',
              date: '2018-13-06',
              type: 'educational',
              image: 'image.png',
              description: 'awesome'
            }
            ],
            pagination: {
              page: 2,
              pages: 4
            }
          }
        });
      });
      const returnedActions = [
        {
          type: types.GET_ALL_EVENTS,
          eventData: {
            message: 'events found',
            event: [{
              title: 'evento',
              date: '2018-12-06',
              type: 'wedding',
              image: 'image.png',
              description: 'awesome'
            },
            {
              title: 'test',
              date: '2018-13-06',
              type: 'educational',
              image: 'image.png',
              description: 'awesome'
            }
            ],
            pagination: {
              page: 2,
              pages: 4
            }
          },
        },
      ];
      const store = mockStore({});
      await store.dispatch(getAllEvents());
      expect(store.getActions()).toEqual(returnedActions);
      done();
    });
  });

  describe('TEST FOR GETTING A EVENT', () => {
    it('CREATES GET_SINGLE_EVENT', async (done) => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {
            message: 'Event found',
            center: {
              id: 3,
              title: 'evento',
              date: '2018-12-06',
              type: 'wedding',
              image: 'image.png',
              description: 'awesome'
            }
          }
        });
      });
      const returnedActions = [
        {
          type: types.GET_SINGLE_EVENT,
          eventData: {
            message: 'Event found',
            center: {
              id: 3,
              title: 'evento',
              date: '2018-12-06',
              type: 'wedding',
              image: 'image.png',
              description: 'awesome'
            }
          },
        },
      ];
      const store = mockStore({});
      await store.dispatch(singleEvent());
      expect(store.getActions()).toEqual(returnedActions);
      done();
    });
  });

  describe('TEST FOR GETTING EVENT(S) SLATED FOR A CENTER', () => {
    it('CREATES GET_SLATED_EVENT', async (done) => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {
            message: 'Upcoming Event',
            upcomingEvent: [{
              id: 3,
              title: 'evento',
              date: '2018-12-06',
              type: 'wedding',
              image: 'image.png',
              description: 'awesome'
            },
            {
              id: 4,
              title: 'evento',
              date: '2018-12-06',
              type: 'wedding',
              image: 'image.png',
              description: 'awesome'
            }],
            pagination: {
              page: 1,
              pages: 1
            }
          }
        });
      });
      const returnedActions = [
        {
          type: types.GET_SLATED_EVENT,
          eventData: {
            message: 'Upcoming Event',
            upcomingEvent: [{
              id: 3,
              title: 'evento',
              date: '2018-12-06',
              type: 'wedding',
              image: 'image.png',
              description: 'awesome'
            },
            {
              id: 4,
              title: 'evento',
              date: '2018-12-06',
              type: 'wedding',
              image: 'image.png',
              description: 'awesome'
            }],
            pagination: {
              page: 1,
              pages: 1
            }
          },
        },
      ];
      const store = mockStore({});
      await store.dispatch(slatedEvent());
      expect(store.getActions()).toEqual(returnedActions);
      done();
    });
  });

  describe('TEST FOR ADD EVENT', () => {
    it('CREATES ADD_EVENT UPON CREATING AN EVENT', async (done) => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 201,
          response: eventMockedData.eventData
        });
      });
      const returnedActions = [
        {
          type: types.ADD_EVENT,
          eventData: eventMockedData.eventData,
        },
      ];
      const eventDetails = {
        title: 'evento',
        date: '2018-12-06',
        type: 'wedding',
        image: 'image.png',
        description: 'awesome'
      };
      const store = mockStore({});
      await store.dispatch(addEvent(eventDetails));
      expect(store.getActions()).toEqual(returnedActions);
      done();
    });
  });

  describe('TEST FOR GETTING EVENT(S) A USER CREATED', () => {
    it('CREATES GET_USER_EVENTS', async (done) => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {
            event: [{
              id: 3,
              title: 'evento',
              date: '2018-12-06',
              type: 'wedding',
              image: 'image.png',
              description: 'awesome'
            },
            {
              id: 4,
              title: 'evento',
              date: '2018-12-06',
              type: 'wedding',
              image: 'image.png',
              description: 'awesome'
            }],
            pagination: {
              page: 1,
              pages: 1
            }
          }
        });
      });
      const returnedActions = [
        {
          type: types.GET_USER_EVENTS,
          eventData: {
            event: [{
              id: 3,
              title: 'evento',
              date: '2018-12-06',
              type: 'wedding',
              image: 'image.png',
              description: 'awesome'
            },
            {
              id: 4,
              title: 'evento',
              date: '2018-12-06',
              type: 'wedding',
              image: 'image.png',
              description: 'awesome'
            }],
            pagination: {
              page: 1,
              pages: 1
            }
          },
        },
      ];
      const store = mockStore({});
      await store.dispatch(userEvents());
      expect(store.getActions()).toEqual(returnedActions);
      done();
    });
  });

  describe('TEST FOR DELETING AN EVENT', () => {
    it('CREATES DELETE_EVENT', async (done) => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {
            message: 'Event deleted'
          }
        });
      });
      const returnedActions = [
        {
          type: types.DELETE_EVENT,
          eventData: {
            message: 'Event deleted'
          },
        },
      ];
      const store = mockStore({});
      await store.dispatch(deleteEvent());
      expect(store.getActions()).toEqual(returnedActions);
      done();
    });
  });

  describe('TEST FOR EDIT EVENT', () => {
    it('CREATES EDIT_EVENT UPON EDITTING AN EVENT', async (done) => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {
            message: 'Event editted successfully',
            updatedEvent: eventMockedData.eventData
          }
        });
      });
      const returnedActions = [
        {
          type: types.EDIT_EVENT,
          eventData: {
            message: 'Event editted successfully',
            updatedEvent: eventMockedData.eventData
          }
        },
      ];
      const eventDetails = {
        title: 'evento',
        date: '2018-12-06',
        type: 'wedding',
        image: 'image.png',
        description: 'awesome'
      };
      const store = mockStore({});
      await store.dispatch(editEvent(eventDetails));
      expect(store.getActions()).toEqual(returnedActions);
      done();
    });
  });
});

