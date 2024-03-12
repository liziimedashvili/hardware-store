/* eslint-disable react/no-children-prop */
/* eslint-disable no-unused-vars */
import React from "react";
import { useWishlist } from "../../context/LikedProductsContext";
import TrashIcon from "../../assets/icons/bin.svg";
import { useCart } from "../../context/CartContext";
import Button from "../button";
import CartIcon from "../../assets/icons/header-cart.svg";
import { useNavigate } from "react-router-dom";
import LikeIcon from "../icons/LikeIcon";

export default function WishList() {
  const { likedProducts, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const nav = useNavigate();

  const handleProductClick = (productId) => {
    nav(`/product/${productId}`);
  };

  return (
    <div className="flex flex-wrap ml-9 mt-5 justify-between">
      {likedProducts.map((product) => (
        <div key={product?.likedProduct.id} className="relative">
          <button
            className="absolute top-0 right-[30px] m-2 cursor-pointer"
            onClick={() => removeFromWishlist(product.id)}
          >
            <LikeIcon color="red" />
          </button>
          <div
            className="flex gap-2 flex-col  w-52 bg-white rounded-lg p-2 cursor-pointer"
            onClick={() => handleProductClick(product.likedProduct.id)}
          >
            <div>
              <img
                src={product?.likedProduct.image}
                className="h-40 object-contain"
                alt={product?.likedProduct.title}
              />
              <div className="flex flex-col justify-start">
                <div className="font-bold text-lg">
                  {product?.likedProduct.salePrice ? (
                    <div className="flex gap-2 items-center">
                      <span className="text-orange-600">
                        {product?.likedProduct.salePrice}₾
                      </span>
                      <span className="line-through text-sm ">
                        {product?.likedProduct.price} ₾
                      </span>
                    </div>
                  ) : (
                    <span>{product?.likedProduct.price}₾</span>
                  )}
                </div>

                <h3 className="line-clamp-1">{product?.likedProduct.title}</h3>
              </div>
            </div>
          </div>
          <div className="flex flex-row ">
            <Button
              children="დამატება"
              className="bg-orange-600 gap-2 w-full text-white rounded-md text-sm p-1"
              icon={
                <img src={CartIcon} width={14} height={14} alt="Cart Icon" />
              }
              onClick={() => addToCart(product)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
