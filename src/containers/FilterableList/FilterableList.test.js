import FilterableList from './FilterableList';
import InputGroup from '../../components/InputGroup/InputGroup';
import Button from '../../components/Button/Button';
import List from '../../components/List/List';

import { pizzas } from '../../../pizza.json';

const pizzasSortedAsc = pizzas.concat().sort((a, b) => {
    return a.toLowerCase() > b.toLowerCase();
});

const pizzasSortedDesc = pizzas.concat().sort((a, b) => {
    return b.toLowerCase() > a.toLowerCase();
});

describe('FilterableList View', () => {

    it('should have default state', () => {
      const wrapper = mount(<FilterableList />);

      expect(wrapper.state('search')).toEqual('');
      expect(wrapper.state('sort')).toEqual(false);
    });

    it('should have a child List that renders the items', () => {
      const wrapper = mount(<FilterableList items={pizzas} />);
      const list = wrapper.find('ul');
      expect(list).toHaveLength(1);
      expect(list.children()).toHaveLength(pizzas.length);
    });



    it('should sort the list items in ascending alphabetical order by default', () => {
        const wrapper = mount(<FilterableList items={pizzas} />);
        const list = wrapper.find('ul');

        pizzasSortedAsc.forEach((pizza, i) => {
            expect(list.childAt(i).text()).toBe(pizza);
        });
    });

    it('should sort the list items in descending alphabetical order when the sort button is clicked', () => {
        const wrapper = mount(<FilterableList items={pizzas} />);
        const list = wrapper.find('ul');
        const button = wrapper.find('button');

        button.simulate('click');

        pizzasSortedDesc.forEach((pizza, i) => {
            expect(list.childAt(i).text()).toBe(pizza);
        });

    });


    it('should have a child InputGroup with a Button and List', () => {
        const wrapper = shallow(<FilterableList />);
        expect(wrapper.containsMatchingElement(InputGroup)).toBe(true);
        expect(wrapper.containsMatchingElement(Button)).toBe(true);
        expect(wrapper.containsMatchingElement(List)).toBe(true);
    });

    it('should filter the list items when the value of the input changes using case insensitive comparisons and respecting the sort order', () => {
        const wrapper = mount(<FilterableList items={pizzas} />);
        const input = wrapper.find('input');
        const list = wrapper.find('ul');
        const button = wrapper.find('button');

        input.simulate('change', { target: { value: 'Chee' } });
        expect(list.children()).toHaveLength(2);
        expect(list.childAt(0).text()).toBe('3 cheeSe');
        expect(list.childAt(1).text()).toBe('Cheese');

        button.simulate('click');
        expect(list.children()).toHaveLength(2);
        expect(list.childAt(0).text()).toBe('Cheese');
        expect(list.childAt(1).text()).toBe('3 cheeSe');
    });

});
