import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './_Button.scss';


const Button = ({variants, isPressed, isHovered, children, onClick, icon}) => {

    const baseClass = 'button';
    const variantClasses = variants.map((variant) => `${baseClass}--${variant}`);
    const classes = classNames(baseClass, variantClasses, {
        'button--is-pressed': isPressed,
        'button--is-hovered': !isPressed && isHovered,
        'button--has-icon': icon
    });

    return (
        <button className={classes} onClick={onClick}>
            {children}
        </button>
    )
};

Button.defaultProps = {
    variants: []
};

Button.propTypes = {
    onClick: PropTypes.func,
    variants: PropTypes. array
};

export default Button;

