import React from 'react';
import PropTypes from 'prop-types';
import './InputField.css'; 

const InputField = ({
  type = 'text',
  value,
  onChange,
  placeholder,
  inputClass = '',
  errorMessage = '',
  id = ''
}) => {
  // Check if `onChange` is a function
  const handleChange = (e) => {
    if (typeof onChange === 'function') {
      onChange(e.target.value);
    } else {
      console.error('onChange prop must be a function');
    }
  };

  return (
    <div className="input-field">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className={inputClass}
        id={id}
      />
      {errorMessage && <span className="error-message">{errorMessage}</span>}
    </div>
  );
};

InputField.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  inputClass: PropTypes.string,
  errorMessage: PropTypes.string,
  id: PropTypes.string,
};

export default InputField;
