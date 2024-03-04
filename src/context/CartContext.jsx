/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// CartContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  getFromCart,
  addProductToCart,
  deleteFromCart,
} from "../services/services";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCartItems = async () => {
    setLoading(true);
    try {
      const response = await getFromCart();
      setCartProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching cart items:", error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  const addToCart = async (product) => {
    setLoading(true);
    try {
      const response = await addProductToCart({
        productId: product.id,
        quantity: 1,
      });
      console.log("Response after adding product to cart:", response.data);
      setCartProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Failed to add product to cart:", error);
      setError(error);
      setLoading(false);
    }
  };

  const removeFromCart = async (productId) => {
    setLoading(true);
    try {
      await deleteFromCart(productId);
      setCartProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== productId)
      );
      setLoading(false);
    } catch (error) {
      console.error("Failed to remove product from cart:", error);
      setError(error);
      setLoading(false);
    }
  };

  return (
    <CartContext.Provider
      value={{ cartProducts, addToCart, removeFromCart, loading, error }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
