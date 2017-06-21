import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import { FilterableList } from 'containers';
import './_App.scss';

class App extends Component {

    state = {
        pizzas: []
    };

    componentDidMount() {
        fetch('/pizza.json')
            .then(res => res.json())
            .then(res => {
                this.setState({ pizzas: res.pizzas.sort((a, b) => a > b) });
            })
            .catch(error => console.error(error))
            ;
    }

    render() {
        if (!this.state.pizzas.length) {
            return <div className="container"><div className="loader">Loading...</div></div>;
        }
        return (
            <div className="container">
                <header className="header media media--center justify-between">

                    <h2 className="media__body section-title__heading">Pizza Flavors</h2>

                    <div className="media__figure media__figure--reverse">
                        <svg className="section-title__icon" x="0px" y="0px" width="36px" height="36px" viewBox="0 0 48 48">
                            <g transform="translate(0, 0)"><path data-cap="butt" data-color="color-2" fill="none" stroke="#444444" strokeWidth="2" strokeMiterlimit="10" d="M14.6,24.4 c0.7,0.4,1.5,0.6,2.4,0.6c2.8,0,5-2.2,5-5c0-2-1.2-3.7-2.8-4.5" strokeLinejoin="miter" strokeLinecap="butt"/><circle data-color="color-2" fill="none" stroke="#444444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" cx="27" cy="30" r="3" strokeLinejoin="miter"/><path data-cap="butt" fill="none" stroke="#444444" strokeWidth="2" strokeMiterlimit="10" d="M39.2,35.9C34.7,37.8,29.2,39,24,39 s-10.6-1.3-15.2-3.2" strokeLinejoin="miter" strokeLinecap="butt"/><path fill="none" stroke="#444444" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M5.7,42 c5.6,2.6,11.8,4,18.3,4s12.7-1.4,18.3-4L24,6L5.7,42z" strokeLinejoin="miter"/>
                            </g>
                        </svg>
                    </div>

                </header>

                <FilterableList items={this.state.pizzas}  />
            </div>
        );
    }
}

export default App;
