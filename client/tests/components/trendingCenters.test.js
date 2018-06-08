import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import TrendingCenters from '../../components/Center/TrendingCenters';
import centerMockedData from '../__mocks__/centerMockedData';


const props = {
  centers: {
    center: [centerMockedData.centerData]
  }
};

describe('<TrendingCenters />', () => {
  it('should render Footer correctly', () => {
    const wrapper = shallow(<TrendingCenters {...props}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
