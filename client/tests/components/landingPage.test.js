import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import { LandingPage, mapDispatchToProps } from '../../components/common/LandingPage';
import centerMockedData from '../__mocks__/centerMockedData';
import eventMockedData from '../__mocks__/eventMockedData';

const event = {
  preventDefault: jest.fn(),
  target: {
    data: 1
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


const props = {
  userData: {
    isAuthenticated: true,
  },
  getTrendingCenters: () =>
    Promise.resolve(),
  getPopularEvents: () => Promise.resolve()
};

describe('Create Component', () => {
  it('SHOULD RENDER SELF AND SUB COMPONENT', () => {
    const wrapper = shallow(<LandingPage {...props} />);
    wrapper.setProps({
      getCenters: {
        centers: centerMockedData.centerData
      }
    });
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.state().fetchingCenters).toEqual(false);
  });

  it('SHOULD RETRIEVE EVENT ID', () => {
    const wrapper = shallow(<LandingPage {...props} />);
    wrapper.instance().getEventId(event);
    expect(event.preventDefault).toHaveBeenCalled();
  });

  it('SHOULD RETRIEVE CENTER ID', () => {
    const wrapper = shallow(<LandingPage {...props} />);
    wrapper.instance().getCenterId(center);
    expect(center.preventDefault).toHaveBeenCalled();
  });

  it('SHOULD RENDER REACT LIFECYCLE FOR getCenters ELSE STATEMENT', () => {
    const wrapper = shallow(<LandingPage {...props} />);
    wrapper.setProps({
      getCenters: null
    });
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.state().fetchingCenters).toEqual(true);
  });

  it('SHOULD RENDER REACT LIFECYCLE FOR getEvents IF STATEMENT', () => {
    const wrapper = shallow(<LandingPage {...props} />);
    wrapper.setProps({
      getEvents: {
        events: eventMockedData.eventData
      }
    });
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.state().fetchingEvents).toEqual(false);
  });
});

describe('the mapDispatchToProps function', () => {
  it('should return an object of functions to be passed as props', () => {
    const dispatchFn = jest.fn();
    const propsObj = mapDispatchToProps(dispatchFn);

    expect(propsObj).toEqual({
      getTrendingCenters: expect.any(Function),
      getPopularEvents: expect.any(Function)
    });

    propsObj.getTrendingCenters();
    propsObj.getPopularEvents();

    expect(dispatchFn).toHaveBeenCalledTimes(2);
  });
});

