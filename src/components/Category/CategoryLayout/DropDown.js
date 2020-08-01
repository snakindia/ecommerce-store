import React, { useCallback } from 'react';

const DropDown = props => {
  const { styles, options = [], selectedValue, onChange, name } = props;

  const handleChange = useCallback(
    ({ target }) => {
      onChange(name, target.value);
    },
    [selectedValue]
  );
  return (
    <select
      id="shortOption"
      className="form-control-select form-select"
      style={styles}
      value={selectedValue}
      onChange={handleChange}
    >
      {options.map((option, index) => (
        <option
          key={index}
          value={option.value}
          selected={option.value === selectedValue}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default DropDown;
