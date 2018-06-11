import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import { EditCenter, mapDispatchToProps } from '../../components/Center/EditCenter';

const props = {
  singleCenter: () => Promise.resolve(),
  editCenter: () => Promise.resolve(),
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

describe('<EditCenter />', () => {
  it('should render EventDetails component correctly correctly', () => {
    const wrapper = shallow(<EditCenter {...props} />);
    wrapper.setProps({
      getSingleCenter: {
        center: {
          name: 'badcenter',
          centerId: 2,
          capacity: '233',
          location: 'ikeja',
          price: '4500',
          image: 'image.com',
          description: 'awesome',
          isAvailable: false,
          state: 'lagos'
        }
      }
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('should display inputs typed on the form', () => {
    const wrapper = shallow(<EditCenter {...props} />);
    wrapper.instance().handleChange(event);
    wrapper.instance().handleSubmit(event);
    wrapper.instance().handleUpload(event);
    wrapper.setState({
      name: 'badcenter',
      centerId: 2,
      capacity: '233',
      location: 'ikeja',
      price: '2000',
      image: 'image.com',
      description: 'awesome',
      isAvailable: false,
      state: 'lagos'
    });
    expect(wrapper.state().errorStatus).toEqual(false);
  });

  it('should display inputs typed on the form', () => {
    const wrapper = shallow(<EditCenter {...props} />);
    wrapper.instance().toggleAvailability(event);
    wrapper.setState({
      available: {
        isAvailable: true,
      }
    });
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.state().errorStatus).toEqual(false);
  });

  it('should return an object of functions to be passed as props', () => {
    const dispatchFn = jest.fn();
    const propsObj = mapDispatchToProps(dispatchFn);

    expect(propsObj).toEqual({
      singleCenter: expect.any(Function),
      editCenter: expect.any(Function),
    });

    propsObj.singleCenter();
    propsObj.editCenter();

    expect(dispatchFn).toHaveBeenCalledTimes(2);
  });
});
