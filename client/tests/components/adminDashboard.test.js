import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import { Dashboard, mapDispatchToProps } from '../../components/Center/Dashboard';
import centerMockedData from '../__mocks__/centerMockedData';
import eventMockedData from '../__mocks__/eventMockedData';

const props = {
  getAllCenters: () => Promise.resolve(),
  getAllEvents: () => Promise.resolve()
};

const eventPage = {
  nextCenterPage: {
    pageData: {
      selected: 1
    }
  }
};


const center = {
  preventDefault: jest.fn(),
  target: {
    dataset: {
      centerid: 1
    }
  }
};

describe('create Component', () => {
  it('SHOULD RENDER COMPONENT CORRECTLY', () => {
    const wrapper = shallow(<Dashboard {...props}/>);
    wrapper.setProps({
      centers: [centerMockedData.centerData]
    });
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.state().fetchingCenters).toEqual(true);
  });

  it('SHOULD RENDER REACT LIFECYCLE FOR getEvents IF STATEMENT', () => {
    const wrapper = shallow(<Dashboard {...props} />);
    wrapper.setProps({
      events: eventMockedData.eventData
    });
    expect(wrapper.exists()).toBe(true);
    wrapper.instance().eventPaginate(eventPage);
    wrapper.instance().centerPaginate(eventPage);
    expect(wrapper.state().fetchingEvents).toEqual(true);
  });

  it('SHOULD RENDER REACT LIFECYCLE FOR getEvents IF STATEMENT', () => {
    const wrapper = shallow(<Dashboard {...props} />);
    wrapper.setProps({
      getEvents: null
    });
    expect(wrapper.exists()).toBe(true);
    wrapper.instance().eventPaginate(eventPage);
    wrapper.instance().getCenterId(center);
    wrapper.instance().getEventId(center);
    wrapper.instance().centerPaginate(eventPage);
    expect(wrapper.state().fetchingEvents).toEqual(true);
  });

  it('should return an object of functions to be passed as props', () => {
    const dispatchFn = jest.fn();
    const propsObj = mapDispatchToProps(dispatchFn);

    expect(propsObj).toEqual({
      getAllCenters: expect.any(Function),
      getAllEvents: expect.any(Function)
    });

    propsObj.getAllCenters();
    propsObj.getAllEvents();

    expect(dispatchFn).toHaveBeenCalledTimes(2);
  });
});
