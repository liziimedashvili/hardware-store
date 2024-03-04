/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import React from "react";
export const Category = ({ category }) => {
  const navigate = useNavigate();
  const handleCategoryClick = () => {
    navigate(`/category/${category.id}`);
  };
  return (
    <div className=" cursor-pointer py-[12px] px-[7px] border-b hover:bg-gray-200 border-gray-300">
      <div onClick={handleCategoryClick}>
        <h2 className="font-medium text-xs leading-[14px] text-gray-500 ">
          {category.name}
        </h2>
      </div>
    </div>
  );
};
