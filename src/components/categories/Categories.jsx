import { useState, useEffect } from "react";
import axios from "axios";
import { Category } from "./Category";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}product-category`);
        const categoryNames = response.data.map(category => category.name);
        setCategories(categoryNames);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mt-[50px] ">
    <div className="flex flex-col custom-container items-start ">
    <div className=" bg-white relative shadow-md rounded-lg w-[240px]  ">
      {categories.length === 0 ? (
        <p className="font-bold text-center">Loading categories...</p>
      ) : (
        categories.map((categoryName, index) => (
          <Category key={index} category={categoryName} />
        ))
      )}</div>
    </div></div>
  );
};

export default Categories;
