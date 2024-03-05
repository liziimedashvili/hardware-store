/* eslint-disable react/no-children-prop */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Button from "../components/button/index";
import EmptyCartIcon from "../assets/emptybag.svg";
import TrashIcon from "../assets/bin.svg";
import { getFromCart, deleteFromCart } from "../services/services";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const [data, setData] = useState([]);
  const { removeFromCart } = useCart();
  const navigate = useNavigate();
  const fetchCart = async () => {
    try {
      const response = await getFromCart();
      const { data } = response;
      setData(data.map((item) => ({ ...item, quantity: item.count })));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const calculateTotalPrice = () => {
    return data.reduce(
      (total, product) => total + product.cartProduct.price * product.quantity,
      0
    );
  };

  const increaseQuantity = async (productId) => {
    try {
      const updatedData = data.map((item) =>
        item.cartProduct.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setData(updatedData);
    } catch (error) {
      console.error(error);
    }
  };

  const decreaseQuantity = async (productId) => {
    try {
      const updatedData = data.map((item) =>
        item.cartProduct.id === productId
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      );
      setData(updatedData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRemoveFromCart = async (productId) => {
    try {
      await deleteFromCart(productId);
      removeFromCart(productId);
      setData((prevData) => prevData.filter((item) => item.id !== productId));
    } catch (error) {
      console.error(error);
    }
  };
  const handlePaymentClick = () => {
    navigate(`/payment`);
  };

  return (
    <div className="custom-container  ">
      <div className="pb-5 border-b-2 ">
        <p className="font-bold text-[28px] leading-7">
          შენს კალათაში {data.reduce((total, item) => total + item.quantity, 0)}{" "}
          ნივთია
        </p>
      </div>
      <div className="flex justify-between mt-[30px]">
        <div className="flex flex-col gap-5">
          {data.length > 0 ? (
            data.map((product) => (
              <div
                key={product?.cartProduct.id}
                className=" h-[100px] p-[12px] rounded-[12px] justify-between bg-[#f2f2f2] flex items-center w-[700px]"
              >
                <div className="flex flex-row justify-start items-center">
                  <div>
                    <img
                      src={product?.cartProduct.image}
                      className="w-full h-24 object-contain"
                      alt={product?.cartProduct.title}
                    />
                  </div>
                  <div className="flex flex-col justify-start gap-4">
                    <h1 className="text-gray-600 text-md">
                      {product?.cartProduct.title}
                    </h1>
                    <span className="font-bold">
                      {" "}
                      {product?.cartProduct.price}
                    </span>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="bg-orange-600 text-white flex justify-around items-center text-[12px] font-bold w-[100px] h-[30px] rounded-[30px]">
                    <button
                      onClick={() => decreaseQuantity(product.cartProduct.id)}
                    >
                      -
                    </button>
                    <span>{product.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(product.cartProduct.id)}
                    >
                      +
                    </button>
                  </div>
                  <button onClick={() => handleRemoveFromCart(product.id)}>
                    <img src={TrashIcon} alt="trashIcon" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <img src={EmptyCartIcon} alt="emptyCartIcon" />
          )}
        </div>
        <div className="rounded-[12px] ">
          <div className="flex justify-between items-center gap-2 mb-5  ">
            <h2 className="text-orange-600 font-bold text-md">
              გადასახდელი თანხა
            </h2>
            <span className="font-bold text-md text-black">
              {calculateTotalPrice().toFixed(2)}₾
            </span>
          </div>
          <div>
            <Button
              children="ყიდვა"
              className="w-full bg-orange-600 text-white px-[10px] py-2 rounded-[4px] font-bold text-sm leading-5"
              onClick={handlePaymentClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
