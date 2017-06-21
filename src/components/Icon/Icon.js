import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './_Icon.scss';

const Icon = ({variants}) => {

    const baseClass = 'icon';
    const variantClasses = variants.map((variant) => `${baseClass}--${variant}`);
    const classes = classNames(baseClass, variantClasses, {});
    return (
        <i className={classes}></i>
    );
}


Icon.defaultProps = {
    variants: []
};

Icon.propTypes = {
    icon: PropTypes.string,
    variants: PropTypes.array
};

export default Icon;
