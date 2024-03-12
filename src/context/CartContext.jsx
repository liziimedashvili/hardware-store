/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { createContext, useContext, useEffect, useState } from "react";
import {
  getFromCart,
  addProductToCart,
  deleteFromCart,
} from "../services/services";
import { toast } from "react-toastify";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCartItems = () => {
    setLoading(true);

    const isAuthorized = localStorage.getItem("accessToken");
    if (isAuthorized) {
      getFromCart()
        .then((response) => {
          setCartProducts(response.data);
        })
        .catch((error) => {
          console.error("Error fetching cart items:", error);
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
      console.log("User is unauthorized");
      setCartProducts([]);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  const addToCart = (product) => {
    setLoading(true);

    addProductToCart({ product_id: product.id })
      .then(() => {
        toast.success("პროდუქტი დაემატა კალათაში", {
          position: "top-right",
        });
        fetchCartItems();
      })
      .catch((error) => {
        setError(error);
        toast.error("მოხდა შეცდომა", {
          position: "top-right",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const removeFromCart = (productId, removeAll) => {
    setLoading(true);

    deleteFromCart(productId, removeAll)
      .then(() => {
        setCartProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== productId)
        );
        toast.success("პროდუქტი წარმატებით წაიშალა", {
          position: "top-right",
        });
      })
      .catch((error) => {
        toast.error("მოხდა შეცდომა", {
          position: "top-right",
        });
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        fetchCartItems,
        addToCart,
        removeFromCart,
        loading,
        error,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
