import React from 'react';
import { shallow } from 'enzyme';
import jwt from 'jsonwebtoken';
import expect from 'expect';
import userMockData from '../__mocks__/userMockedData';
import { SignUp, mapDispatchToProps } from '../../components/User/Signup';

const formSubmit = {
  userData: { isAuthenticated: false },
  userSignUp: jest.fn(() => Promise.resolve()),
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

const error = {
  userData: { isAuthenticated: false },
  userSignUp: jest.fn(() => Promise.reject({
    response: {
      data: {
        message: 'Something went wrong.'
      }
    }
  })),
};

describe('create component', () => {
  it('should display validation errors on form submit if no data is provided', () => {
    const wrapper = shallow(<SignUp {...formSubmit} />);

    const form = wrapper.find('form');

    form.simulate('submit', { preventDefault: jest.fn() });
    const errors = <span>First Name should contain only alphabets</span>;

    expect(wrapper.state().errors).toEqual({
      username: expect.any(String),
      email: expect.any(String),
      password: expect.any(String),
      firstname: expect.any(String),
      lastname: expect.any(String)
    });

    expect(wrapper.contains(errors)).toBe(true);
  });

  it('calls the userSignUp api function when valid data is submitted with form', () => {
    const validToken = jwt.sign({ isAdmin: false }, 'secret');
    localStorage.setItem('x-access-token', validToken);

    const { userData } = userMockData;
    const wrapper = shallow(<SignUp {...formSubmit} />);

    wrapper.find('#firstname').simulate('change', { target: { name: 'firstname', value: userData.firstname } });

    wrapper.find('#lastname').simulate('change', { target: { name: 'lastname', value: userData.lastname } });

    wrapper.find('#username').simulate('change', { target: { name: 'username', value: userData.username } });

    wrapper.find('#email').simulate('change', { target: { name: 'email', value: userData.email } });

    wrapper.find('#password').simulate('change', { target: { name: 'password', value: userData.password } });

    wrapper.find('form').simulate('submit', { preventDefault: jest.fn() });
    expect(formSubmit.userSignUp).toHaveBeenCalledWith(wrapper.state());

    // assert that user is redirected to dashboard after successful login.
    return Promise.resolve().then(() => {
      expect(wrapper.state().showRedirectMessage).toBe(true);
      expect(formSubmit.history.push).toHaveBeenCalledWith('/dashboard');
    });
  });

  it('redirects user to dashboard if user is logged in', () => {
    const validToken = jwt.sign({ isAdmin: false }, 'secret');
    localStorage.setItem('x-access-token', validToken);

    const wrapper = shallow(<SignUp {...validate} />);
    expect(wrapper.exists()).toBe(true);
    expect(validate.history.push).toHaveBeenCalledWith('/dashboard');
  });

  it('redirects admin user to admin dashboard if admin is logged in', () => {
    const validToken = jwt.sign({ isAdmin: true }, 'secret');
    localStorage.setItem('x-access-token', validToken);

    const wrapper = shallow(<SignUp {...validate} />);
    expect(wrapper.exists()).toBe(true);
    expect(validate.history.push).toHaveBeenCalledWith('/admin/dashboard');
  });

  it('redirects user to admin dashboard after signup if the signed up user is an administrator', () => {
    const validToken = jwt.sign({ isAdmin: true }, 'secret');
    localStorage.setItem('x-access-token', validToken);

    const { userData } = userMockData;
    const wrapper = shallow(<SignUp {...formSubmit} />);

    wrapper.find('#firstname').simulate('change', { target: { name: 'firstname', value: userData.firstname } });

    wrapper.find('#lastname').simulate('change', { target: { name: 'lastname', value: userData.lastname } });

    wrapper.find('#username').simulate('change', { target: { name: 'username', value: userData.username } });

    wrapper.find('#email').simulate('change', { target: { name: 'email', value: userData.email } });

    wrapper.find('#password').simulate('change', { target: { name: 'password', value: userData.password } });

    wrapper.find('form').simulate('submit', { preventDefault: jest.fn() });
    expect(formSubmit.userSignUp).toHaveBeenCalledWith(wrapper.state());

    // assert that user is redirected to dashboard after successful login.
    return Promise.resolve().then(() => {
      expect(wrapper.state().showRedirectMessage).toBe(true);
      expect(formSubmit.history.push).toHaveBeenCalledWith('/admin/dashboard');
    });
  });

  it.skip('displays a server error from the server if the signup process fails ', () => {
    const { userData } = userMockData;
    const wrapper = shallow(<SignUp {...error} />);

    wrapper.find('#firstname').simulate('change', { target: { name: 'firstname', value: userData.firstname } });

    wrapper.find('#lastname').simulate('change', { target: { name: 'lastname', value: userData.lastname } });

    wrapper.find('#username').simulate('change', { target: { name: 'username', value: userData.username } });

    wrapper.find('#email').simulate('change', { target: { name: 'email', value: userData.email } });

    wrapper.find('#password').simulate('change', { target: { name: 'password', value: userData.password } });

    wrapper.find('form').simulate('submit', { preventDefault: jest.fn() });
    expect(formSubmit.userSignUp).toHaveBeenCalledWith(wrapper.state());

    // assert that user is redirected to dashboard after successful login.
    return Promise.reject().catch(() => {
      console.log('now', wrapper.state());
      expect(wrapper.state().errorStatus).toBe(true);
      // expect(formSubmit.history.push).toHaveBeenCalledWith('/dashboard');
    });
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
