import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import SideBar from '../../components/common/SideBar';

describe('<SideBar />', () => {
  it('should render SideBar correctly', () => {
    const wrapper = shallow(<SideBar />);
    expect(wrapper).toMatchSnapshot();
  });
});
