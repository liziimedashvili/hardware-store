/* eslint-disable no-unused-vars */
/* eslint-disable react/no-children-prop */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MainLogo from "../assets/icons/main-logo.svg";
import Dots from "../assets/icons/dots-logo.svg";
import CartIcon from "../assets/icons/header-cart.svg";
import UserIcon from "../assets/icons/user-icon.svg";
import Button from "../components/button/index";
import Login from "../components/modals/Login";
import Success from "../components/modals/Success";
import { useCart } from "../context/CartContext";
import SearchBar from "../components/search";
import useScrollDirection from "../hooks/useScrollDirection";

// in milliseconds
const SUCCESS_MODAL_HIDE_TIME = 3000;

export default function Header() {
  const navigate = useNavigate();
  const { cartProducts } = useCart();
  const scrollDirection = useScrollDirection();

  const [showModal, setShowModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState();

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowSuccessModal(true);

    // setTimeout for closing modal after "SUCCESS_MODAL_HIDE_TIME" milliseconds
    setTimeout(() => {
      setShowSuccessModal(false);
    }, SUCCESS_MODAL_HIDE_TIME);
  };

  const handleProfilePage = () => {
    navigate("/profile");
  };

  const showProfileOrLogin = () => {
    const isLogged = isLoggedIn || localStorage.getItem("accessToken");

    if (isLogged) {
      return (
        <div className="bg-white flex-row w-32 opacity-80 rounded-lg flex items-center justify-center gap-[10px] p-2 cursor-pointer shadow-md">
          <img src={UserIcon} />
          <Button children="პროფილი" onClick={handleProfilePage} />
        </div>
      );
    } else {
      return (
        <div
          onClick={handleShow}
          className="bg-white flex-row w-32 opacity-80 rounded-lg flex items-center justify-center gap-[10px] p-2 cursor-pointer shadow-md"
        >
          <img src={UserIcon} />
          <Button children="შესვლა" />
        </div>
      );
    }
  };

  return (
    <header
      className={`sticky ${
        scrollDirection === "down" ? "-top-24" : "top-0"
      } transition-all duration-500 bg-[#F2F0F0] z-50`}
    >
      <div className="custom-container h-[70px] flex flex-row items-center justify-between">
        <div>
          <Link to="/">
            <img src={MainLogo} className="cursor-pointer w-40 h-10" />
          </Link>
        </div>
        <div className="flex flex-row gap-5 ">
          <Link to="/navigation">
            <div className="flex flex-row items-center bg-[#EC5E2A] w-[130px]  rounded-[12px] gap-[10px] p-[10px] cursor-pointer ">
              <img src={Dots} />
              <span className="font-medium text-sm text-[#fff]">ნავიგაცია</span>
            </div>
          </Link>

          <SearchBar />
          <Link to="/cart">
            <div className="bg-white flex-row w-32 opacity-80 rounded-lg flex items-center justify-center p-2.5 cursor-pointer shadow-md">
              <Button
                children="კალათა"
                className="gap-[10px]"
                icon={<img src={CartIcon} alt="Cart Icon" />}
              />
              <span className=" text-white rounded-full text-sm absolute top-[10px] bg-orange-600 right-[395px] w-[22px] h-5 flex items-center justify-center">
                {cartProducts.reduce((total, item) => total + item.count, 0)}
              </span>
            </div>
          </Link>
          {showProfileOrLogin()}
        </div>
      </div>
      <Login
        showModal={showModal}
        handleClose={handleClose}
        onLoggedIn={handleLogin}
      />

      <Success
        title="წარმატებული ავტორიზაცია"
        showModal={showSuccessModal}
        handleClose={() => setShowSuccessModal(false)}
      />
    </header>
  );
}
