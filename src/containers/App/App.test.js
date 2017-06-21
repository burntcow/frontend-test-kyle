import App from './App';
import sinon from 'sinon';
import { pizzas } from '../../../pizza.json';

describe('App View', () => {

    it('should have default state', () => {
      const wrapper = mount(<App />);

      expect(wrapper.state('pizzas')).toEqual([]);

    });

    it('should show a loading indicator while data is being loaded', () => {
        const wrapper = shallow(<App />);

        expect(wrapper.find('.loader')).toHaveLength(1);
    });

    it('calls componentDidMount', () => {
        sinon.spy(App.prototype, 'componentDidMount');
        const wrapper = mount(<App />);

        expect(App.prototype.componentDidMount.calledOnce).toBe(true);
    });

    it('should not show loading state after data is loaded', () => {
        const wrapper = mount(<App />);
        wrapper.setState({ pizzas });

        expect(wrapper.state().pizzas).toHaveLength(pizzas.length);
        expect(wrapper.find('.loader')).toHaveLength(0);
    });



});
