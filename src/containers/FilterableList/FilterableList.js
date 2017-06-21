import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-fetch';
import {
    List,
    InputGroup,
    Button,
    Icon
} from 'components/index';

class FilterableList extends Component {

    static defaultProps = { items: [] };
    static propTypes = { items: PropTypes.array };

    state = {
        items: [],
        search: '',
        sort: false
    };

    handleOnChange = (e) => {
        this.setState({ search: e.target.value });
    };

    handleSort = () => {
        this.setState({ sort: !this.state.sort });
    };

    sortFilterItems = () => {
        return this.props.items.map(item => item)
            .filter(item => item.toLowerCase()
                .includes(this.state.search.toLowerCase()))
            .sort((a, b) => this.state.sort ?
                (b.toLowerCase() > a.toLowerCase()) :
                (a.toLowerCase() > b.toLowerCase()));
        };

    render() {
        return (
            <div>
                <div className="section-controls flex justify-between">
                    <InputGroup
                        id="pizza-list__filter"
                        type="text"
                        placeholder="Search Pizzas"
                        onChange={this.handleOnChange}
                        label="Search Pizzas"
                        showLabel={false}
                        className="flex-grow"
                        variants={[]}
                    />
                    <Button onClick={this.handleSort} variants={['primary']} icon={true}>
                        <Icon variants={this.state.sort ? ['sort-alpha--desc'] : ['sort-alpha--asc']} />
                        Sort
                    </Button>
                </div>

                <List items={this.sortFilterItems()} variants={['unstyled', 'blocked', 'relaxed']} />
            </div>
        );
    }
}

export default FilterableList;
