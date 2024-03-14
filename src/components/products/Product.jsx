/* eslint-disable react/no-children-prop */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Button from "../button/index";
import CartIcon from "../../assets/icons/header-cart.svg";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/LikedProductsContext";
import LikeIcon from "../icons/LikeIcon";
import { useTranslation } from "react-i18next";
const Product = ({ product, showDescription }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const { t } = useTranslation("global");
  const { addToWishlist, likedProducts, removeFromWishlist } = useWishlist();

  const isProductLiked = likedProducts.some(
    (likedProduct) => likedProduct.likedProduct.id === product.id
  );

  const handleProductClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="relative h-80 w-52 bg-white rounded-lg p-2 cursor-pointer">
      {" "}
      <div
        className="absolute top-0 right-0 m-2"
        onClick={() =>
          isProductLiked
            ? removeFromWishlist(likedProducts[0].id)
            : addToWishlist(product)
        }
      >
        <LikeIcon color={isProductLiked ? "red" : "grey"} />
      </div>
      <div className="flex flex-col gap-2 max-w-40 cursor-pointer rounded-md h-[303px] justify-around  dark:bg-white">
        <div onClick={handleProductClick}>
          <div className="rounded-lg bg-white overflow-hidden">
            <img
              src={product.image}
              className="w-full h-40 object-contain"
              alt={product.title}
            />
          </div>
          <div className="flex flex-col items-start w-full min-h-20">
            <p className="text-black mt-2 text-lg font-bold ">
              {product.salePrice ? (
                <>
                  <span className="line-through mr-2 text-sm text-orange-600">
                    ₾{product.price}
                  </span>{" "}
                  ₾{product.salePrice}
                </>
              ) : (
                `₾${product.price}`
              )}
            </p>
            <h3 className="text-sm text-gray-700">{product.title}</h3>
            {showDescription && (
              <p className="text-black opacity-80 font-medium text-xs leading-4 overflow-hidden">
                {product.description}
              </p>
            )}
          </div>
        </div>

        <Button
          className="bg-[#f4855d] text-black px-[10px] py-3 w-full rounded-[4px] font-bold text-sm leading-5 gap-1 "
          icon={<img src={CartIcon} width={14} height={14} alt="Cart Icon" />}
          onClick={() => addToCart(product)}
        >
          {t("product.addToCart")}
        </Button>
      </div>
    </div>
  );
};

export default Product;
