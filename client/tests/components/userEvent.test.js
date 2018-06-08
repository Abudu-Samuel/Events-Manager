import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import { UserEvent, mapDispatchToProps } from '../../components/Event/UserEvent';
import eventMockedData from '../__mocks__/eventMockedData';

const eventPage = {
  nextCenterPage: {
    pageData: {
      selected: 1
    }
  }
};

// const state = {
//   events: {
//     userEvents: eventMockedData.eventData
//   }
// };

const event = {
  preventDefault: jest.fn(),
  target: {
    data: 1
  },
};

const props = {
  userEvents: () => Promise.resolve(),
  deleteEvent: () => Promise.resolve()
};

describe('create Component', () => {
  it('SHOULD RENDER COMPONENT CORRECTLY', () => {
    const wrapper = shallow(<UserEvent {...props} />);
    expect(wrapper.exists()).toBe(true);
    // expect(wrapper.state().fetchingCenter).toEqual(true);
  });

  it('should simulate pagination button', () => {
    const wrapper = shallow(<UserEvent {...props} />);
    wrapper.instance().eventPaginate(eventPage);
    expect(wrapper.exists()).toBe(true);
  });

  it('should delete event created by a user', () => {
    const wrapper = shallow(<UserEvent {...props} />);

    wrapper.setState({
      events: [{
        centerId: 1,
        createdAt: '2018-06-04T14:58:30.637Z',
        date: '2018-06-05',
        description: 'Great event',
        id: 2,
        image: 'https://res.cloudinary.com/leumas/image/upload/v1528124306/f84xrghgmxek1o4nfpoi.jpg',
        title: 'Updated Event',
        type: 'Wedding',
        updatedAt: '2018-06-04T21:34:28.162Z',
        userId: 3
      }]
    });
    // console.log(wrapper.find('.delete-event'));

    wrapper.find('button.delete-event').simulate('click');
  });
});

describe('the mapDispatchToProps function', () => {
  it('should return an object of functions to be passed as props', () => {
    const dispatchFn = jest.fn();
    const propsObj = mapDispatchToProps(dispatchFn);

    expect(propsObj).toEqual({
      userEvents: expect.any(Function),
      deleteEvent: expect.any(Function)
    });

    propsObj.userEvents();
    propsObj.deleteEvent();

    expect(dispatchFn).toHaveBeenCalledTimes(2);
  });

  // it('should call mapStateToProps(state)', (done) => {
  //   mapStateToProps(state);
  //   done();
  // });
});
