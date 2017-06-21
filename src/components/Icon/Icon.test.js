import Icon from './Icon';

describe('Icon Component', () => {

    it('should render an <i> element', () => {
        const wrapper = shallow(<Icon />);
        expect(wrapper.type()).toBe('i');
    });

    it('should accept variants and assign variant classes', () => {
        const wrapper = shallow(<Icon variants={['sort-alpha--asc']} />);
        expect(wrapper.hasClass('icon--sort-alpha--asc')).toBe(true);
        expect(wrapper.is('.icon.icon--sort-alpha--asc')).toBe(true);
    });

});
