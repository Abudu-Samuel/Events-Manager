import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import { EditEvent, mapDispatchToProps } from '../../components/Event/EditEvent';

const props = {
  singleEvent: () => Promise.resolve(),
  match: {
    params: {
      eventId: 1
    }
  },
};

const event = {
  preventDefault: jest.fn(),
  target: {
    name: 'test',
    files: [{ data: 'samuel', type: 'image/jpg' }]
  }
};

describe('<EditEvent />', () => {
  it('should render EventDetails component correctly correctly', () => {
    const wrapper = shallow(<EditEvent {...props} />);
    wrapper.setProps({
      getSingleEvent: {
        event: {
          title: 'hihi',
          centerId: 1,
          date: '2013-05-04',
          description: 'awesome',
          type: 'wedding',
          image: 'image.png'
        }
      }
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('should display inputs typed on the form', () => {
    const wrapper = shallow(<EditEvent {...props} />);
    wrapper.instance().handleChange(event);
    wrapper.instance().handleSubmit(event);
    wrapper.instance().handleUpload(event);
    wrapper.setState({
      title: 'test',
      centerId: 2,
      date: '2013-05-04',
      description: 'awesome',
      type: 'wedding',
      image: 'image.png',
      errors: {},
      errorStatus: false,
      errorMessage: ''
    });
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.state().errorStatus).toEqual(false);
  });
  
  it('should return an object of functions to be passed as props', () => {
    const dispatchFn = jest.fn();
    const propsObj = mapDispatchToProps(dispatchFn);

    expect(propsObj).toEqual({
      singleEvent: expect.any(Function),
      editEvent: expect.any(Function),
    });

    propsObj.singleEvent();
    propsObj.editEvent();

    expect(dispatchFn).toHaveBeenCalledTimes(2);
  });
});
