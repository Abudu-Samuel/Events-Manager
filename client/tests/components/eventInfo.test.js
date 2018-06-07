import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import EventInfo from '../../components/Event/EventInfo';
import eventMockedData from '../__mocks__/eventMockedData';


const props = {
  event: eventMockedData.eventData
};

describe('<EventInfo />', () => {
  it('should render Footer correctly', () => {
    const wrapper = shallow(<EventInfo {...props}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
