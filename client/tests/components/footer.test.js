import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import Footer from '../../components/common/Footer';

describe('<Footer />', () => {
  it('should render Footer correctly', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});
