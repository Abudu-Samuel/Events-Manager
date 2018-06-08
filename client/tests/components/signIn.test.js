import React from 'react';
import { shallow } from 'enzyme';
import jwt from 'jsonwebtoken';
import expect from 'expect';
import { Signin, mapDispatchToProps } from '../../components/User/SignIn';
import userMockData from '../__mocks__/userMockedData';

const formSubmit = {
  userData: { isAuthenticated: false },
  userSignIn: jest.fn(() => Promise.resolve()),
  history: {
    push: jest.fn()
  },
};

const validate = {
  userData: { isAuthenticated: true },
  history: {
    push: jest.fn()
  }
};

describe('create component', () => {
  it('should display validation errors on form submit if no data is provided', () => {
    const wrapper = shallow(<Signin {...formSubmit} />);

    const form = wrapper.find('form');

    form.simulate('submit', { preventDefault: jest.fn() });

    expect(wrapper.state().errors).toEqual({
      username: expect.any(String),
      password: expect.any(String),
    });
  });

  it('calls the userSignIn api function when valid data is submitted with form', () => {
    const validToken = jwt.sign({ isAdmin: false }, 'secret');
    localStorage.setItem('x-access-token', validToken);

    const { userData } = userMockData;
    const wrapper = shallow(<Signin {...formSubmit} />);

    wrapper.find('#username').simulate('change', { target: { name: 'username', value: userData.username } });

    wrapper.find('#password').simulate('change', { target: { name: 'password', value: userData.password } });

    wrapper.find('form').simulate('submit', { preventDefault: jest.fn() });
    expect(formSubmit.userSignIn).toHaveBeenCalledWith(wrapper.state());

    // assert that user is redirected to dashboard after successful login.
    return Promise.resolve().then(() => {
      expect(wrapper.state().showRedirectMessage).toBe(true);
      expect(formSubmit.history.push).toHaveBeenCalledWith('/dashboard');
    });
  });

  it('calls the userSignIn api function when valid data is submitted with form', () => {
    const validToken = jwt.sign({ isAdmin: true }, 'secret');
    localStorage.setItem('x-access-token', validToken);

    const wrapper = shallow(<Signin {...formSubmit} />);

    wrapper.setState({
      username: 'tester',
      password: 'passworded'
    });

    wrapper.find('form').simulate('submit', { preventDefault: jest.fn() });
    expect(formSubmit.userSignIn).toHaveBeenCalledWith(wrapper.state());

    // assert that user is redirected to dashboard after successful login.
    return Promise.resolve().then(() => {
      expect(wrapper.state().showRedirectMessage).toBe(true);
      expect(formSubmit.history.push).toHaveBeenCalledWith('/admin/dashboard');
    });
  });

  it('redirects user to dashboard if user is logged in', () => {
    const validToken = jwt.sign({ isAdmin: false }, 'secret');
    localStorage.setItem('x-access-token', validToken);

    const wrapper = shallow(<Signin {...validate} />);
    expect(wrapper.exists()).toBe(true);
    expect(validate.history.push).toHaveBeenCalledWith('/dashboard');
  });

  it('redirects user to admin dashboard if admin user is logged in', () => {
    const validToken = jwt.sign({ isAdmin: true }, 'secret');
    localStorage.setItem('x-access-token', validToken);

    const wrapper = shallow(<Signin {...validate} />);
    expect(wrapper.exists()).toBe(true);
    expect(validate.history.push).toHaveBeenCalledWith('/admin/dashboard');
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
