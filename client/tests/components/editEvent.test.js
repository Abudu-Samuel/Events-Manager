import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import { EditEvent, mapDispatchToProps } from '../../components/Event/EditEvent';

import eventMockedData from '../__mocks__/eventMockedData';

const props = {
  singleEvent: () => Promise.resolve(),
  match: {
    params: {
      eventId: 1
    }
  }
};

describe('<EditEvent />', () => {
  it('should render EventDetails component correctly correctly', () => {
    const wrapper = shallow(<EditEvent {...props}/>);
    wrapper.setProps({
      event: eventMockedData.eventData
    });
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.state().fetchingEvent).toBe(false);
  });
});
