import InputGroup from './InputGroup';


describe('InputGroup Component', () => {

    it('should render an input element with correct attributes', () => {
        const onChange = jest.fn();
        const wrapper = mountInputGroup(onChange);
        const input = wrapper.find('input');

        expect(input).toHaveLength(1);
        expect(input.type()).toBe('input');
        expect(input.props().id).toBe('test-input');
        expect(input.props().type).toBe('text');
        expect(input.props().placeholder).toBe('Input Placeholder');
        expect(typeof(input.props().onChange)).toBe('function');
    });

    it('should execute the onChange function when the input value changes', () => {
        const onChange = jest.fn();
        const wrapper = mountInputGroup(onChange);

        expect(onChange).not.toHaveBeenCalled();

        wrapper.find('input').simulate('change', { target: { value: 'Test' } });
        expect(onChange).toHaveBeenCalled();
    });

    it('should render a label element with correct attributes', () => {
        const wrapper = mountInputGroup();
        const label = wrapper.find('label');

        expect(label.type()).toBe('label');
        expect(label).toHaveLength(1);
        expect(label.props().htmlFor).toBe('test-input');
        expect(label.text()).toBe('Label Text');
    });

    it('should accept variants and assign variant classes', () => {
        const wrapper = mountInputGroup();
        expect(wrapper.hasClass('input-group--variant')).toBe(true);
        expect(wrapper.is('.input-group.input-group--variant')).toBe(true);
    });

});


function mountInputGroup(onChange) {
    return shallow(
        <InputGroup
            id="test-input"
            type="text"
            placeholder="Input Placeholder"
            onChange={onChange}
            label="Label Text"
            showLabel={true}
            variants={['variant']}
        />
    );
}
