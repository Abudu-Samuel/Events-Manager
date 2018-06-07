import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import { SignUp, mapDispatchToProps } from '../../components/User/Signup';

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
  errors: {},
  userSignUp: () => Promise.resolve()
};

describe('create component', () => {
  it('should render component', () => {
    const wrapper = shallow(<SignUp {...props}/>);
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
      userSignUp: expect.any(Function),
    });

    propsObj.userSignUp();

    expect(dispatchFn).toHaveBeenCalledTimes(1);
  });
});
