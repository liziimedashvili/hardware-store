/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  getLikedProducts,
  removeLikedProduct,
  addLikedProduct,
} from "../services/services";
import { toast } from "react-toastify";
import Login from "../components/modals/Login";
const WishlistContext = createContext();

export const LikedProductsProvider = ({ children }) => {
  const [likedProducts, setLikedProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const fetchLikedItems = () => {
    setLoading(true);

    const isAuthorized = localStorage.getItem("accessToken");
    if (isAuthorized) {
      getLikedProducts()
        .then((response) => {
          setLikedProducts(response.data);
        })
        .catch((error) => {
          console.error("Error fetching wishlist items:", error);
          setError("Error fetching wishlist items. Please try again later.");
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
      setError("User is unauthorized. Please log in.");
      setLikedProducts([]);
    }
  };

  useEffect(() => {
    fetchLikedItems();
  }, []);

  const addToWishlist = async (product) => {
    const isAuthenticated = localStorage.getItem("accessToken");

    if (!isAuthenticated) {
      setShowLoginModal(true);
      return;
    }
    try {
      const isProductInLikedProducts = likedProducts.some(
        (likedProduct) => likedProduct.likedProduct.id === product.id
      );

      if (!isProductInLikedProducts) {
        const response = await addLikedProduct({ product_id: product.id });
        fetchLikedItems();
        toast.success("პროდუქტი დაემატა ვიშლისტში", {
          position: "top-right",
        });
      } else {
        toast.info("პროდუქტი უკვე ვიშლისტშია", {
          position: "top-right",
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("მოხდა შეცდომა, პროდუქტი ვერ დაემატა ვიშლისტში", {
        position: "top-right",
      });
    }
  };

  const removeFromWishlist = (productId) => {
    setLoading(true);
    removeLikedProduct(productId)
      .then(() => {
        setLikedProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== productId)
        );

        toast.success("პროდუქტი წაიშალა ვიშლისტიდან", {
          position: "top-right",
        });
      })
      .catch((error) => {
        setError("Failed to remove product  wishlist. Please try again later.");
        toast.error("პროდუქტი ვერ წაიშალა ვიშლისტიდან", {
          position: "top-right",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <WishlistContext.Provider
      value={{
        likedProducts,
        setLikedProducts,
        fetchLikedItems,
        loading,
        error,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
      {showLoginModal && (
        <Login
          showModal={showLoginModal}
          handleClose={() => setShowLoginModal(false)}
        />
      )}
    </WishlistContext.Provider>
  );
};
export const useWishlist = () => useContext(WishlistContext);
