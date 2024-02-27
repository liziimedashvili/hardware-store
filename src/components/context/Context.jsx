/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState } from "react";

const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addToShoppingCart = (product) => {
    const isProductInCart = items.some((p) => p.id === product.id);

    if (!isProductInCart) {
      setItems((prevItems) => [...prevItems, product]);
    }
  };

  const removeFromShoppingCart = (productId) => {
    setItems(items.filter((p) => p.id !== productId));
  };

  return (
    <ShoppingCartContext.Provider
      value={{ items, addToShoppingCart, removeFromShoppingCart }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCart = () => useContext(ShoppingCartContext);
