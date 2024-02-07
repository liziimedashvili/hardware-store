/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

export default function Button({onClick, children }) {
  return (
    <button
      onClick={onClick}
    >
      {children}
    </button>
  );
}