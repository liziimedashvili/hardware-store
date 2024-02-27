/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProduct } from "../services/services";

export default function SingleProductPage() {
  const { productId } = useParams();
  const [productData, setProductData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async (productId) => {
      try {
        const response = await getProduct(productId);
        setProductData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("An error occurred while fetching data.");
      }
    };

    fetchData(productId);
  }, [productId]);

  const breadcrumbs = [
    { label: "მთავარი >", path: "/" },
    { label: "პროდუქტები >", path: "/" },
    { label: productData?.category_name || "Product" },
  ];

  return (
    <div className="mt-10">
      <nav>
        <ul className="flex flex-row gap-5 custom-container text-lg font-bold">
          {breadcrumbs.map((breadcrumb, index) => (
            <li key={index}>
              <Link to={breadcrumb.path}>{breadcrumb.label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      {productData ? (
        <div className="custom-container flex flex-col gap-2 max-w-40 cursor-pointer rounded-md h-[310px] items-start justify-between bg-white mr">
          <div className="rounded-lg bg-white overflow-hidden mt-16">
            <img
              src={productData.image}
              className="w-full h-full object-contain"
              alt={productData.title}
            />
          </div>
          <div className="flex flex-col items-start">
            <h2 className="font-bold text-2xl">{productData.title}</h2>
            <p className="text-black mt-2 text-lg font-bold">
              ₾{productData.price}
            </p>
            <p className="text-sm text-gray-700 mt-2 ">
              {productData.description}
            </p>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
