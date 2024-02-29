/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react";
import { getCategories } from "../../services/services";
import { Category } from "./Category";
const Categories = () => {
  const [categories, setCategories] = useState([]);

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

  return (
    <div className="mt-[50px] mb-11">
      <div className="flex flex-col">
        <div className="bg-white shadow-xl rounded-lg w-[240px]">
          {categories.map((category) => (
            <Category key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
