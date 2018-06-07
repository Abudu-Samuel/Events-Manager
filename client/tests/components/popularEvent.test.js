import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import PopularEvents from '../../components/Event/PopularCenter';
import eventMockedData from '../__mocks__/eventMockedData';


const props = {
  events: {
    event: [eventMockedData.eventData]
  }
};

describe('<PopularEvents />', () => {
  it('should render Footer correctly', () => {
    const wrapper = shallow(<PopularEvents {...props}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
