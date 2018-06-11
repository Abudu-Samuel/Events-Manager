import React from 'react';
import { shallow } from 'enzyme';
import jwt from 'jsonwebtoken';
import expect from 'expect';
import { AddCenter } from '../../components/Center/AddCenter';
import AdminRouteProtector from '../../components/Hoc/AdminRouteProtector';

describe('<HOC />', () => {
  it('should render AddCenter component when a user is an admin', () => {
    const validToken = jwt.sign({ isAdmin: true }, 'secret');
    localStorage.setItem('x-access-token', validToken);
    const props = {
      addCenter: () => Promise.resolve(),
    };
    const ProtectedComponent = AdminRouteProtector(AddCenter);
    const wrapper = shallow(<ProtectedComponent {...props} />);

    expect(wrapper.state('redirect')).toBe(false);
  });

  it('should not render AddCenter component when a user is not an admin', () => {
    const validToken = jwt.sign({ isAdmin: false }, 'secret');
    localStorage.setItem('x-access-token', validToken);
    const props = {
      addCenter: () => Promise.resolve(),
    };
    const ProtectedComponent = AdminRouteProtector(AddCenter);
    const wrapper = shallow(<ProtectedComponent {...props} />);

    expect(wrapper.state('redirect')).toBe(true);
  });
});
