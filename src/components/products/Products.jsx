/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Product from "./Product";
import { getProducts } from "../../services/services";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();

        const { products } = response.data;
        if (products) {
          setProducts(response.data.products);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="flex gap-[20px] mt-[100px]">
      {products &&
        products.map((product) => (
          <Product key={product.id} product={product} showDescription={false} />
        ))}
    </div>
  );
};

export default Products;
