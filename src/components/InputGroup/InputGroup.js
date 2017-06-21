import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './_InputGroup.scss';

const InputGroup = ({ label, id, type, placeholder, onChange, showLabel, className, variants }) => {

    const baseClass = 'input-group';
    const variantClasses = variants.map((variant) => `${baseClass}--${variant}`);
    const classes = classNames(baseClass, variantClasses, className, {});

    return (
        <div className={classes}>
            {/* Render a label element if a label prop is provided */}
            {label && <label htmlFor={id} className={!showLabel && 'sr-only'}>{label}</label>}
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    );

}

InputGroup.defaultProps = {
    type: 'text',
    variants: [],
    showLabel: true
};

InputGroup.propTypes = {
    label: PropTypes.string,
    id: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    showLabel: PropTypes.bool,
    className: PropTypes.string,
    variants: PropTypes.array
};

export default InputGroup;
