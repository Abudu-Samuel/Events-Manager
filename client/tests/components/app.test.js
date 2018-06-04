import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import App from '../../components/app';

describe('<App />', () => {
  it('should render App correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
