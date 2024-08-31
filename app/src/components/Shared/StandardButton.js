import React from 'react';
import PropTypes from 'prop-types';
import './StandardButton.css'; 

const StandardButton = ({ buttonType = 'default', disabled = false, onClick, children }) => {
  const handleClick = (event) => {
    if (!disabled && onClick) {
      onClick(event);
    }
  };

  return (
    <div className="btn">
      <button
        className={`standard-button ${buttonType} ${disabled ? 'is-disabled' : ''}`}
        disabled={disabled}
        onClick={handleClick}
      >
        {children}
      </button>
    </div>
  );
};

// Define prop types for validation
StandardButton.propTypes = {
  buttonType: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
};

export default StandardButton;
