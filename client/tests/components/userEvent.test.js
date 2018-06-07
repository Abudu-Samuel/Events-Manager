import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import { UserEvent, mapDispatchToProps, mapStateToProps } from '../../components/Event/UserEvent';
import eventMockedData from '../__mocks__/eventMockedData';

const eventPage = {
  nextCenterPage: {
    pageData: {
      selected: 1
    }
  }
};

const state = {
  events: {
    userEvents: eventMockedData.eventData
  }
};

const event = {
  preventDefault: jest.fn(),
  target: {
    data: 1
  },
  willDelete: () => Promise.resolve()
};

const props = {
  userEvents: () => Promise.resolve()
};

describe('create Component', () => {
  it('SHOULD RENDER COMPONENT CORRECTLY', () => {
    const wrapper = shallow(<UserEvent {...props}/>);
    wrapper.setProps({
      getUserEvents: {
        events: eventMockedData.eventData
      }
    });
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.state().fetchingCenter).toEqual(true);
  });

  it('should simulate pagination button', () => {
    const wrapper = shallow(<UserEvent {...props}/>);
    wrapper.instance().eventPaginate(eventPage);
    expect(wrapper.exists()).toBe(true);
  });

  it('should simulate delete button', () => {
    const wrapper = shallow(<UserEvent {...props}/>);
    wrapper.instance().handleDelete(event);
    expect(wrapper.exists()).toBe(true);
  });
});

describe('the mapDispatchToProps function', () => {
  it('should return an object of functions to be passed as props', () => {
    const dispatchFn = jest.fn();
    const propsObj = mapDispatchToProps(dispatchFn);

    expect(propsObj).toEqual({
      userEvents: expect.any(Function),
      deleteEvent: expect.any(Function)
    });

    propsObj.userEvents();
    propsObj.deleteEvent();

    expect(dispatchFn).toHaveBeenCalledTimes(2);
  });

  it('should call mapStateToProps(state)', (done) => {
    mapStateToProps(state);
    done();
  });
});
