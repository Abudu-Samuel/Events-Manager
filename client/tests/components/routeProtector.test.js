import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import { RouteProtector } from '../../components/Hoc/RouteProtector';

describe('<HOC />', () => {
  it('should render Form correctly', () => {
    const wrapper = shallow(<RouteProtector />);
    expect(wrapper.exists()).toBe(true);
  });
});
