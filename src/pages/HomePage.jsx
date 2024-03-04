/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Categories from "../components/categories/Categories";
import SimpleSlider from "../components/slider/MainSlider";
import Products from "../components/products/Products";

export default function HomePage() {
  return (
    <div className=" flex flex-col">
      <div className="flex flex-row justify-between custom-container">
        <Categories />
        <SimpleSlider />
      </div>

      <div className="custom-container">
        <Products />
      </div>
    </div>
  );
}
