/* eslint-disable no-unused-vars */
import React from "react";
import Categories from "../components/categories/Categories";
import SimpleSlider from "../components/slider/Slider";
import Products from "../components/products/Products";

export default function HomePage() {
  return (
    <div className="custom-container flex flex-col">
      <div className="flex flex-row justify-between">
        <Categories />
        <SimpleSlider />
      </div>

      <div>
        <Products />
      </div>
    </div>
  );
}
