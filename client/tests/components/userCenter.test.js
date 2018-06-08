import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import { UserCenter, mapDispatchToProps } from '../../components/Center/UserCenter';

const props = {
  getAllCenters: () => Promise.resolve(),
};

const centerPage = {
  nextCenterPage: {
    pageData: {
      selected: 1
    }
  }
};

describe('create component', () => {
  it('should render component', () => {
    const wrapper = shallow(<UserCenter {...props}/>);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render component', () => {
    const wrapper = shallow(<UserCenter {...props}/>);
    wrapper.instance().centerPaginate(centerPage);
    expect(wrapper).toMatchSnapshot();
  });
});


describe('the mapDispatchToProps function', () => {
  it('should return an object of functions to be passed as props', () => {
    const dispatchFn = jest.fn();
    const propsObj = mapDispatchToProps(dispatchFn);

    expect(propsObj).toEqual({
      getAllCenters: expect.any(Function),
    });

    propsObj.getAllCenters();

    expect(dispatchFn).toHaveBeenCalledTimes(1);
  });
});
