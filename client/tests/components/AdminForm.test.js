import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import AdminForm from '../../components/common/forms/AdminForm';


const props = {
  errors: {
    name: 'Something happened',
    state: 'state is wrong',
    location: 'location is wrong',
    capacity: 'capacity is wrong',
    description: 'description is wrong',
    price: 'price is wrong'
  }
};

describe('<AdminForm />', () => {
  it('should render AdminForm correctly', () => {
    const wrapper = shallow(<AdminForm {...props}/>);
    expect(wrapper.exists()).toBe(true);
  });
});
