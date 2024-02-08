/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
const Input = ({ type, id, value, placeholder, onChange }) => {
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    if (onChange) {
      onChange(inputValue);
    }
  };
  return (
    <Input
      type={type}
      id={id}
      value={value}
      placeholder={placeholder}
      onChange={handleInputChange}
    />
  );
};
export default Input;