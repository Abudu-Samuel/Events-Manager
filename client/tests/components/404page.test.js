import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import NotFoundPage from '../../components/common/NotFoundPage';

describe('<NotFoundPage />', () => {
  it('should render NotFoundPage correctly', () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
