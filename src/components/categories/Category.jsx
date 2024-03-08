/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import React from "react";
export const Category = ({ category }) => {
  return (
    <Link to={"/products"}>
      <div className=" cursor-pointer py-[12px] px-[7px] border-b hover:bg-gray-200 border-gray-300">
        <h2 className="font-medium text-xs leading-[14px] text-gray-500 ">
          {category.name}
        </h2>
      </div>
    </Link>
  );
};
