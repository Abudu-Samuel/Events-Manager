import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import Form from '../../components/common/forms/Form';


const props = {
  errors: {
    title: 'Something happened',
    type: 'date is wrong',
    date: 'type is wrong',
    image: 'image is wrong',
    description: 'description is wrong'
  }
};

describe('<Form />', () => {
  it('should render Form correctly', () => {
    const wrapper = shallow(<Form {...props}/>);
    expect(wrapper.exists()).toBe(true);
  });
});
