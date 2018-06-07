import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import { Navbar, mapDispatchToProps } from '../../components/common/Navbar';

const logOut = {
  preventDefault: jest.fn(),
};

const props = {
  logOut: () => Promise.resolve()
};

describe('create Component', () => {
  it('SHOULD RENDER COMPONENT CORRECTLY', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });

  it('SHOULD RENDER COMPONENT CORRECTLY', () => {
    const wrapper = shallow(<Navbar {...props}/>);
    wrapper.instance().logOut(logOut);
    expect(logOut.preventDefault).toHaveBeenCalled();
  });

  it('should return an object of functions to be passed as props', () => {
    const dispatchFn = jest.fn();
    const propsObj = mapDispatchToProps(dispatchFn);

    expect(propsObj).toEqual({
      logOut: expect.any(Function)
    });

    propsObj.logOut();
    expect(dispatchFn).toHaveBeenCalledTimes(1);
  });
});
