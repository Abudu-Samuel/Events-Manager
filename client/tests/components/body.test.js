import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import Body from '../../components/common/Body';

describe('<Body />', () => {
  it('should render Body correctly', () => {
    const wrapper = shallow(<Body />);
    expect(wrapper).toMatchSnapshot();
  });
});
