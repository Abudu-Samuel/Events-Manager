import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import { LandingPage } from '../../components/common/LandingPage';

const props = {
  userData: {
    isAuthenticated: false,
  },
};

const getTrendingCenters = jest.fn();
const getPopularEvents = jest.fn();
const getEventId = jest.fn();


describe('Create Component', () => {
  it('SHOULD RENDER SELF AND SUB COMPONENT', () => {
    const wrapper = shallow(<LandingPage {...props} getTrendingCenters={() => Promise.resolve()} getPopularEvents={() => Promise.resolve()}/>);
    expect(wrapper.exists()).toBe(true);
  });

  it('test', () => {
    const wrapper = shallow(<LandingPage {...props} getEventId={() => Promise.resolve()} getTrendingCenters={() => Promise.resolve()} getPopularEvents={() => Promise.resolve()}/>);
    expect(wrapper.exists()).toBe(true);
  });
});
