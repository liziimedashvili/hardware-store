/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

export default function Button({ onClick, children, className, icon }) {
  const buttonStyle = `w-32 opacity-80 flex items-center justify-center font-medium cursor-pointer ${className}`;
  return (
    <button className={buttonStyle} onClick={onClick}>
      {icon}
      {children}
    </button>
  );
}
