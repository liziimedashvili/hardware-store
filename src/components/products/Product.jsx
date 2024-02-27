/* eslint-disable react/no-children-prop */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from "react";
import Button from "../button/index";
import CartIcon from "../../assets/header-cart.svg";
import compereIcon from "../../assets/compare-card.svg";
import { useNavigate } from "react-router-dom";

const Product = ({ product, showDescription }) => {
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="flex flex-col gap-2 max-w-40 cursor-pointer rounded-md h-[303px] justify-between bg-white">
      <div onClick={handleProductClick}>
        <div className="rounded-lg bg-white overflow-hidden">
          <img
            src={product.image}
            className="w-full h-40 object-contain"
            alt={product.title}
          />
        </div>
        <div className="flex flex-col items-start w-full min-h-20">
          <p className="font-bold text-[17px] ">₾{product.price}</p>
          <h3>{product.title}</h3>
          {showDescription && (
            <p className="text-black opacity-80 font-medium text-xs leading-4 overflow-hidden">
              {product.description}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-row gap-[10px]">
        <div className="bg-[#f2f2f2] h-11 p-[14px] rounded-[4px] ">
          <img src={compereIcon} alt="Compare Icon" />
        </div>
        <Button
          children="დამატება"
          className="bg-[#f4855d] text-black px-[10px] py-2 rounded-[4px] font-bold text-sm leading-5 gap-1 "
          icon={<img src={CartIcon} width={14} height={14} alt="Cart Icon" />}
        />
      </div>
    </div>
  );
};

export default Product;
