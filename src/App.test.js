import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });
describe('App Component', () => {
  it('should should render App', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div').text()).toBe('Hello World...!');
  });
});
