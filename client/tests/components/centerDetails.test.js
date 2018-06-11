import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import { CenterDetails, mapDispatchToProps } from '../../components/Center/CenterDetails';
import centerMockedData from '../__mocks__/centerMockedData';

const props = {
  singleCenter: () => Promise.resolve(),
  slatedEvent: () => Promise.resolve(),
  match: {
    params: {
      eventId: 1
    }
  }
};

const centerPage = {
  nextCenterPage: {
    pageData: {
      selected: 1
    }
  }
};

describe('<CenterDetails />', () => {
  it('should render EventDetails component correctly correctly', () => {
    const wrapper = shallow(<CenterDetails {...props}/>);
    wrapper.setProps({
      getSlatedEvents: {
        center: centerMockedData.centerData,
        upcomingEvent: {
          length: 1
        }
      }
    });
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.state().fetchingCenter).toBe(false);
  });

  it('should render EventDetails component correctly correctly', () => {
    const wrapper = shallow(<CenterDetails {...props}/>);
    wrapper.setProps({
      getSingleCenter: {
        center: centerMockedData.centerData
      }
    });
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.state().isAvailable).toBe(true);
  });

  it('should render CenterDetails component correctly correctly', () => {
    const wrapper = shallow(<CenterDetails {...props}/>);
    wrapper.setProps({
      center: null
    });
    expect(wrapper).toMatchSnapshot();
    wrapper.instance().eventPaginate(centerPage);
    expect(wrapper.state().fetchingCenter).toBe(true);
  });
});

describe('the mapDispatchToProps function', () => {
  it('should return an object of functions to be passed as props', () => {
    const dispatchFn = jest.fn();
    const propsObj = mapDispatchToProps(dispatchFn);

    expect(propsObj).toEqual({
      singleCenter: expect.any(Function),
      slatedEvent: expect.any(Function),
    });

    propsObj.singleCenter();
    propsObj.slatedEvent();

    expect(dispatchFn).toHaveBeenCalledTimes(2);
  });
});
