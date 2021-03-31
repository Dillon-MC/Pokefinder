import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure, mount } from 'enzyme';
import Card from './Card';

configure({ adapter: new Adapter() });

describe('Tests the Card Component', () => {
   it('expect Card component to match snapshot', () => {
      expect.assertions(1);
      expect(shallow(<Card />)).toMatchSnapshot();
   });
   
   it('expect the Card to display 3 base stats', () => {
      expect.assertions(1);
      const mockCardProps = {
         name: '',
         type: '',
         weight: '',
         hiddenAbility: '',
         baseStats: [],
         sprite: ''
      }
      const wrapper = mount(<Card {...mockCardProps}/>);
      expect(wrapper.find('[id="stat"]').length).toBe(3);
   });
   
   it('expect the Card to expand and display 9 total stats', () => {
      expect.assertions(1);
      const mockCardProps = {
         name: '',
         type: '',
         weight: '',
         hiddenAbility: '',
         baseStats: [
            {stat:{name: ''},
            base_stat: ''},
            {stat:{name: ''},
            base_stat: ''},
            {stat:{name: ''},
            base_stat: ''},
            {stat:{name: ''},
            base_stat: ''},
            {stat:{name: ''},
            base_stat: ''},
            {stat:{name: ''},
            base_stat: ''},
         ],
         sprite: ''
      }
      const wrapper = mount(<Card {...mockCardProps}/>);
      wrapper.find('button').simulate('click');
      expect(wrapper.find('[id="stat"]').length).toBe(9);
   });
});