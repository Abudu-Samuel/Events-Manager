import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import { AddEvent, mapDispatchToProps } from '../../components/Event/AddEvent';


const event = {
  preventDefault: jest.fn(),
  target: {
    name: 'test'
  }
};

describe('<AddEvent />', () => {
  it('should render Footer correctly', () => {
    const wrapper = shallow(<AddEvent />);
    wrapper.instance().handleChange(event);
    wrapper.instance().handleSubmit(event);
    expect(event.preventDefault).toHaveBeenCalled();
    expect(wrapper).toMatchSnapshot();
  });
});

describe('the mapDispatchToProps function', () => {
  it('should return an object of functions to be passed as props', () => {
    const dispatchFn = jest.fn();
    const propsObj = mapDispatchToProps(dispatchFn);

    expect(propsObj).toEqual({
      addEvent: expect.any(Function),
    });

    propsObj.addEvent();

    expect(dispatchFn).toHaveBeenCalledTimes(1);
  });
});
