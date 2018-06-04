import expect from 'expect';
import eventReducer from '../../reducers/event';
import * as types from '../../actionTypes/index';

const initialState = {
  deleteEvent: '',
  userEvents: [],
  singleEvent: {
    message: '',
    event: {}
  },
  popularEvent: [],
  allEvents: [],
  addEvent: '',
  upcomingEventsData: {
    message: '',
    centerId: '',
    pagination: {},
    upcomingEvent: []
  },
  eventPage: '',
  events: {
    event: []
  },
};

describe('Event Reducers Test', () => {
  describe('DELETE EVENT REDUCER', () => {
    it('SHOULD DELTE EVENT DATA', () => {
      initialState.userEvents = {
        event: [{
          id: 1,
          name: 'Nice Event',
        }, {
          id: 2,
          name: 'Birthday',
        }]
      };
      expect(eventReducer(initialState, {
        type: types.DELETE_EVENT,
        eventData: {
          eventFound: {
            id: 1
          }
        }
      })).toEqual({
        ...initialState,
        userEvents: {
          event: [{
            id: 2,
            name: 'Birthday',
          }]
        }
      });
    });
  });

  describe('GET USERS EVENT REDUCER', () => {
    it('SHOULD RETRIEVE USERS EVENT DATA', () => {
      expect(eventReducer(initialState, {
        type: types.GET_USER_EVENTS,
        eventData: {
          eventFound: [{
            id: 1,
            name: 'Birthday',
          }],
          pagination: {
            pages: 2,
          }
        }
      })).toEqual({
        ...initialState,
        userEvents: {
          eventFound: [{
            id: 1,
            name: 'Birthday',
          }],
          pagination: {
            pages: 2,
          }
        },
        eventPage: 2,
      });
    });
  });

  describe('GET SINGLE EVENT REDUCER', () => {
    it('SHOULD SET EVENT DATA OBJECT WITH DATA', () => {
      expect(eventReducer(initialState, {
        type: types.GET_SINGLE_EVENT,
        eventData: {
          name: 'Nice Event',
          id: '1'
        }
      })).toEqual({
        ...initialState,
        event: {
          name: 'Nice Event',
          id: '1'
        },
      });
    });
  });

  describe('EDIT EVENT REDUCER', () => {
    it('SHOULD SET EVENT DATA OBJECT WITH UPDATED DATA', () => {
      expect(eventReducer(initialState, {
        type: types.EDIT_EVENT,
        eventData: {
          name: 'asdfgh',
          id: 1,
          describe: 'the best place',
          date: '2091',
          image: 'sdfghjkl.com',
        }
      })).toEqual({
        ...initialState,
        name: 'asdfgh',
        id: 1,
        describe: 'the best place',
        date: '2091',
        image: 'sdfghjkl.com',
      });
    });
  });

  describe('DEFAULT STATE REDUCER', () => {
    it('SHOULD RETURN PREVIOUS STATE IF ACTION TYPE IS NOT HANDLED', () => {
      expect(eventReducer(initialState, {
        type: 'SDREGTE'
      })).toEqual(initialState);
    });
  });

  describe('ADD EVENT REDUCER', () => {
    it('SHOULD SET EVENTDATA OBJECT WITH UPDATED DATA', () => {
      expect(eventReducer(initialState, {
        type: types.ADD_EVENT,
        eventData: {
          name: 'asdfgh',
          describe: 'the best place',
          date: '2091',
          image: 'sdfghjkl.com',
        }
      })).toEqual({
        ...initialState,
        name: 'asdfgh',
        describe: 'the best place',
        date: '2091',
        image: 'sdfghjkl.com',
      });
    });
  });

  describe('GET TRENDING EVENTS REDUCER', () => {
    it('SHOULD SET TRENDING EVENTS OBJECT WITH DATA', () => {
      expect(eventReducer(initialState, {
        type: types.GET_POPULAR_EVENTS,
        eventData: [{
          name: 'asdfgh',
          id: 1,
          describe: 'the best place',
          date: '2091',
          image: 'sdfghjkl.com',
        },
        {
          name: 'lkjhgfd',
          id: 2,
          describe: 'the best place',
          date: '2091',
          image: 'sdfghjkl.com',
        }]
      })).toEqual({
        ...initialState,
        events: [{
          name: 'asdfgh',
          id: 1,
          describe: 'the best place',
          date: '2091',
          image: 'sdfghjkl.com',
        },
        {
          name: 'lkjhgfd',
          id: 2,
          describe: 'the best place',
          date: '2091',
          image: 'sdfghjkl.com',
        }]
      });
    });
  });

  describe('GET ALL EVENTS REDUCER', () => {
    it('SHOULD SET ALL CENTERS OBJECT WITH DATA', () => {
      expect(eventReducer(initialState, {
        type: types.GET_ALL_EVENTS,
        eventData: {
          name: 'asdfgh',
          id: 1,
          describe: 'the best place',
          date: '2091',
          image: 'sdfghjkl.com',
          pagination: {
            pages: 2
          }
        }
      })).toEqual({
        ...initialState,
        events: {
          name: 'asdfgh',
          id: 1,
          describe: 'the best place',
          date: '2091',
          image: 'sdfghjkl.com',
          pagination: {
            pages: 2
          }
        },
        eventPage: 2
      });
    });
  });

  describe('GET ALL EVENTS FOR A CENTER', () => {
    it('SHOULD SET ALL EVENTS FOR A CENTER OBJECT WITH DATA', () => {
      expect(eventReducer(initialState, {
        type: types.GET_SLATED_EVENT,
        eventData: {
          name: 'asdfgh',
          id: 1,
          describe: 'the best place',
          date: '2091',
          image: 'sdfghjkl.com',
          pagination: {
            pages: 2
          }
        }
      })).toEqual({
        ...initialState,
        upcomingEventsData: {
          name: 'asdfgh',
          id: 1,
          describe: 'the best place',
          date: '2091',
          image: 'sdfghjkl.com',
          pagination: {
            pages: 2
          }
        },
        eventPage: 2
      });
    });
  });
});
