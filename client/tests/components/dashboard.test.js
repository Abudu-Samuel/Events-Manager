import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import { Allevents, mapDispatchToProps } from '../../components/common/Allevents';
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

describe('create Component', () => {
  it('SHOULD RENDER COMPONENT CORRECTLY', () => {
    const wrapper = shallow(<Allevents {...props}/>);
    wrapper.setProps({
      getCenters: {
        centers: centerMockedData.centerData
      }
    });
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.state().fetchingCenters).toEqual(false);
  });

  it('SHOULD RENDER REACT LIFECYCLE FOR getEvents IF STATEMENT', () => {
    const wrapper = shallow(<Allevents {...props} />);
    wrapper.setProps({
      getEvents: {
        events: eventMockedData.eventData
      }
    });
    expect(wrapper.exists()).toBe(true);
    wrapper.instance().eventPaginate(eventPage);
    wrapper.instance().centerPaginate(eventPage);
    expect(wrapper.state().fetchingEvents).toEqual(false);
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
