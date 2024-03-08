/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect, useRef } from "react";
import { getCategories, getProducts } from "../services/services";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Category } from "../components/categories/Category";
const Navigation = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await getCategories();
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await getProducts();
      if (response.data.products) {
        setProducts(response.data.products);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="custom-container">
      <div className="mt-10">
        <div>
          <h1 className="font-bold text-xl text-center">
            იპოვე მარტივად სასურველი ნივთი კატეგორიაზე ერთი დაკლიკვით
          </h1>
        </div>
        <div className="bg-gray-100 shadow-lg mt-20 rounded-lg w-full flex-row flex justify-between items-center border-none px-2">
          {categories.map((category) => (
            <Category key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
