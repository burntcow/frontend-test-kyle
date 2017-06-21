import List from './List';


const items = [
    'List Item 1',
    'List Item 2',
    'List Item 3',
];

describe('List Component', () => {

    it('return an empty ul element if no array is provided', () => {
        const wrapper = shallow(<List />);
        expect(wrapper.type()).toBe('ul');
    });

    it('return an empty ul element if passed an empty array', () => {
        const wrapper = shallow(<List items={[]} />);
        expect(wrapper.type()).toBe('ul');
    });

    it('should render an array to an unordered list', () => {
        const wrapper = shallow(<List items={items} />);

        // The list has the correct number of items
        expect(wrapper.children()).toHaveLength(items.length);

        // Each child is an <li>
        expect(wrapper.children().at(0).type()).toBe('li');

        // The all list items contain the correct text
        expect(wrapper.children().at(0).text()).toBe('List Item 1');
        expect(wrapper.children().at(1).text()).toBe('List Item 2');
        expect(wrapper.children().at(2).text()).toBe('List Item 3');
    });

});




