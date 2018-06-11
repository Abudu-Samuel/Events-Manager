import React from 'react';
import { shallow } from 'enzyme';
import jwt from 'jsonwebtoken';
import expect from 'expect';
import { Allevents } from '../../components/common/Allevents';
import RouteProtector from '../../components/Hoc/RouteProtector';

describe('<HOC />', () => {
  it('should render Allevents component when a user is authenticated', () => {
    const validToken = jwt.sign({ isAdmin: false }, 'secret');
    localStorage.setItem('x-access-token', validToken);
    const props = {
      getAllCenters: () => Promise.resolve(),
      getAllEvents: () => Promise.resolve()
    };
    const ProtectedComponent = RouteProtector(Allevents);
    const wrapper = shallow(<ProtectedComponent {...props} />);

    wrapper.setState({
      validToken: {
        redirect: false
      }
    });
    expect(wrapper.state('redirect')).toBe(false);
  });

  it('should redirect a user to signin page when user is not authenticated', () => {
    const validToken = jwt.sign({ isAdmin: false }, 'secret');
    localStorage.clear('x-access-token', validToken);
    const props = {
      getAllCenters: () => Promise.resolve(),
      getAllEvents: () => Promise.resolve()
    };
    const ProtectedComponent = RouteProtector(Allevents);
    const wrapper = shallow(<ProtectedComponent {...props} />);

    wrapper.setState({
      validToken: {
        redirect: true
      }
    });
    expect(wrapper.state('redirect')).toBe(true);
  });
});
