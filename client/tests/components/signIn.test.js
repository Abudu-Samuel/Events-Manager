import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import { Signin, mapDispatchToProps } from '../../components/User/SignIn';

const props = {
  userData: {
    isAuthenticated: true,
  },
};

const event = {
  target: {
    name: 'test'
  }
};

const formSubmit = {
  preventDefault: jest.fn(),
};

describe('create component', () => {
  it('should render component', () => {
    const wrapper = shallow(<Signin {...props}/>);
    wrapper.instance().handleChange(event);
    wrapper.instance().handleSubmit(formSubmit);
    expect(wrapper.exists()).toBe(true);
  });
});

describe('the mapDispatchToProps function', () => {
  it('should return an object of functions to be passed as props', () => {
    const dispatchFn = jest.fn();
    const propsObj = mapDispatchToProps(dispatchFn);

    expect(propsObj).toEqual({
      userSignIn: expect.any(Function),
    });

    propsObj.userSignIn();

    expect(dispatchFn).toHaveBeenCalledTimes(1);
  });
});
