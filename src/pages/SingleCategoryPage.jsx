/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getCategory } from "../services/services";

export default function SingleCategoryPage() {
  const { categoryId } = useParams();
  const [categoryData, setCategoryData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async (categoryId) => {
    try {
      const response = await getCategory(categoryId);
      setCategoryData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("An error occurred while fetching data.");
    }
  };
  useEffect(() => {
    fetchData(categoryId);
  }, [categoryId]);

  return (
    <div className="custom-container">
      {categoryData && (
        <div>
          <h1>{categoryData.name}</h1>
        </div>
      )}
    </div>
  );
}
