/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Categories from "../components/categories/Categories";
import SimpleSlider from "../components/slider/MainSlider";
import Products from "../components/products/Products";
import { useTheme } from "../context/ThemeContext";

export default function HomePage() {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`flex flex-col $
        isDarkMode ?  bg-[#060814] dark:bg-white`}
    >
      <div className="flex flex-row justify-between  custom-container">
        <Categories />
        <SimpleSlider />
      </div>

      <div className="custom-container">
        <Products />
      </div>
    </div>
  );
}
