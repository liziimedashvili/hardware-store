/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Category from "./Category";
import { getCategories } from "../../services/services";
import { useNavigate } from "react-router-dom";
export default function Categories() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const fetchCategories = async () => {
    try {
      const response = await getCategories();
      setCategories(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  const handleSelectCategory = async (categoryName) => {
    navigate(`/products?categoryName=${categoryName}`);
  };
  return (
    <div className="mt-[50px] mb-11">
      <div className="flex flex-col bg-white shadow-xl rounded-lg w-[240px]  ">
        {categories.map((category) => (
          <Category
            key={category.id}
            category={category}
            onSelectCategory={handleSelectCategory}
          />
        ))}
      </div>
    </div>
  );
}
