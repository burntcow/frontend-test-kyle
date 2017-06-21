import Button from './Button';

describe('Button Component', () => {
    it('should render the button text provided inside the component', () => {
        const buttonText = 'Button Text';
        const wrapper = shallow(<Button>{buttonText}</Button>);

        expect(wrapper.text()).toBe(buttonText);
    });

    it('should render the button text provided inside the component', () => {
        const onClick = jest.fn();
        const wrapper = shallow(
            <Button onClick={onClick}>Button Text</Button>
        );

        wrapper.simulate('click');
        expect(onClick).toHaveBeenCalled();
    });
});
