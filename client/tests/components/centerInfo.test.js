import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import CenterInfo from '../../components/Center/CenterInfo';
import centerMockedData from '../__mocks__/centerMockedData';


const props = {
  center: centerMockedData.centerData,
  upcomingEventsData: {
    upcomingEvent: [centerMockedData.centerData, centerMockedData.centerData]
  }
};

describe('<CenterInfo />', () => {
  it('should render Footer correctly', () => {
    const wrapper = shallow(<CenterInfo {...props}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
