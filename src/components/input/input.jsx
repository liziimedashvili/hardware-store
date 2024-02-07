/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
const Input = ({
  type,
  id,
  value,
  placeholder,
  onChange,
}) => {
 
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