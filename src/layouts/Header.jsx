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
import { useTranslation } from "react-i18next";
// in milliseconds
const SUCCESS_MODAL_HIDE_TIME = 3000;

export default function Header() {
  const navigate = useNavigate();
  const { cartProducts } = useCart();
  const scrollDirection = useScrollDirection();

  const [showModal, setShowModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState();
  const { t } = useTranslation("global");
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
        <div className="bg-white flex-row lg:w-32 md:w-28 opacity-80 rounded-lg flex items-center justify-center lg:gap-[8px] md:gap-1 p-2  cursor-pointer shadow-md">
          <img src={UserIcon} />
          <Button children={t("header.profile")} onClick={handleProfilePage} />
        </div>
      );
    } else {
      return (
        <div
          onClick={handleShow}
          className="bg-white flex-row  md:w-28 opacity-80 rounded-lg flex items-center justify-center  p-2 cursor-pointer shadow-md"
        >
          <img src={UserIcon} />
          <Button children={t("header.enter")} />
        </div>
      );
    }
  };

  return (
    <header
      className={`sticky ${
        scrollDirection === "down" ? "-top-24" : "top-0"
      } transition-all duration-500 bg-[#F2F0F0]  z-50`}
    >
      <div className="custom-container lg:h-[70px] flex flex-row items-center justify-between">
        <div>
          <Link to="/">
            <img
              src={MainLogo}
              className="cursor-pointer lg:w-40 h-10  md:w-28"
            />
          </Link>
        </div>
        <div className="flex flex-row lg:gap-5 md:gap-2 justify-between ">
          <Link to="/navigation">
            <div className="flex flex-row items-center  bg-[#EC5E2A] lg:w-[130px] md:w-[100px]   lg:rounded-[12px] md:rounded-lg lg:gap-[12px] lg:p-[10px] md:px-4 md:py-2 cursor-pointer md:mt-1 ">
              <img src={Dots} className="md:w-4 lg:w-auto" />
              <span className="font-medium lg:text-sm ml-1 md:text-[11px] text-[#fff] ">
                {t("header.navigation")}
              </span>
            </div>
          </Link>
          <SearchBar />
          <Link to="/cart">
            <div className="bg-white  flex-row lg:w-32 md:w-28 opacity-80 rounded-lg flex items-center justify-center lg:p-2.5 md:p-2 cursor-pointer shadow-md">
              <Button
                children={t("header.cart")}
                className="gap-[10px]"
                icon={<img src={CartIcon} alt="Cart Icon" />}
              />
              <span className=" text-white  rounded-full text-sm absolute lg:top-[10px] md:top-0 bg-orange-600 lg:right-[390px] md:right-[204px] w-[22px] h-5 flex items-center justify-center">
                {cartProducts.reduce((total, item) => total + item.count, 0)}
              </span>
            </div>
          </Link>

          <div>{showProfileOrLogin()}</div>
        </div>
      </div>
      <Login
        showModal={showModal}
        handleClose={handleClose}
        onLoggedIn={handleLogin}
      />

      <Success
        title={t("modals.success")}
        showModal={showSuccessModal}
        handleClose={() => setShowSuccessModal(false)}
      />
    </header>
  );
}
