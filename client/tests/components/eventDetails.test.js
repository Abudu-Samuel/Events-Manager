import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import { EventDetails, mapDispatchToProps } from '../../components/Event/EventDetails';
import eventMockedData from '../__mocks__/eventMockedData';

const props = {
  singleEvent: () => Promise.resolve(),
  match: {
    params: {
      eventId: 1
    }
  }
};

describe('<EventDetails />', () => {
  it('should render EventDetails component correctly correctly', () => {
    const wrapper = shallow(<EventDetails {...props}/>);
    wrapper.setProps({
      event: eventMockedData.eventData
    });
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.state().fetchingEvent).toBe(false);
  });

  it('should render EventDetails component correctly correctly', () => {
    const wrapper = shallow(<EventDetails {...props}/>);
    wrapper.setProps({
      event: null
    });
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.state().fetchingEvent).toBe(true);
  });
});

describe('the mapDispatchToProps function', () => {
  it('should return an object of functions to be passed as props', () => {
    const dispatchFn = jest.fn();
    const propsObj = mapDispatchToProps(dispatchFn);

    expect(propsObj).toEqual({
      singleEvent: expect.any(Function),
    });

    propsObj.singleEvent();

    expect(dispatchFn).toHaveBeenCalledTimes(1);
  });
});
