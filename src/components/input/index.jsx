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
    <input
      type={type}
      id={id}
      value={value}
      placeholder={placeholder}
      className="outline-none font-normal text-lg w-full bg-gray-200 px-[16px] py-[16px] rounded-[16px]"
      onChange={handleInputChange}
    />
  );
};

export default Input;
