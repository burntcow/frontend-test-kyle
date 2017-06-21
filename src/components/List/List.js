import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './_List.scss';

const List = ({variants, items}) => {

    const baseClass = 'list';
    const variantClasses = variants.map((variant) => `${baseClass}--${variant}`);
    const classes = classNames(baseClass, variantClasses, {});

    return (
        <ul className={classes}>
            {items.map((item, key) => <li key={key}>{item}</li>)}
        </ul>
    );
}

List.defaultProps = {
    items: [],
    variants: []
};

List.propTypes = {
    items: PropTypes.array,
    variants: PropTypes. array
};

export default List;
