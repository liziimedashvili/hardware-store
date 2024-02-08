/* eslint-disable no-unused-vars */
/* eslint-disable react/no-children-prop */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainLogo from "../assets/main-logo.svg";
import Dots from "../assets/dots-logo.svg";
import SearchIcon from "../assets/search-icon.svg";
import CartIcon from "../assets/header-cart.svg";
import UserIcon from "../assets/user-icon.svg";
import Button from "../components/button";
import Login from "../components/modals/Login";
import Success from "../components/modals/Success";
export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowSuccessModal(true);
  };
  return (
    <header className=" bg-[#F2F0F0]">
      <div className="custom-container h-[70px] flex flex-row items-center justify-between">
        <div>
          <Link to="/">
            <img src={MainLogo} className="cursor-pointer w-40 h-10" />
          </Link>
        </div>
        <div className="flex flex-row gap-5 ">
          <div className="flex flex-row items-center bg-[#EC5E2A] w-[130px]  rounded-[12px] gap-[10px] p-[10px] cursor-pointer ">
            <img src={Dots} />
            <span className="font-medium text-sm text-[#fff]">ნავიგაცია</span>
          </div>
          <div className=" flex-row items-center border border-orange-500 border-opacity-50 rounded-lg shadow-sm p-3 cursor-pointer flex gap-4 w-[440px] h-[44px] bg-[#fff]">
            <img src={SearchIcon} />
            <input
              placeholder="ძიება"
              type="text"
              className="outline-none w-[400px] h-[17px]  text-sm font-medium text-gray-600"
            />
          </div>
          <div className=" bg-white flex-row w-32 opacity-80 rounded-lg flex items-center justify-center gap-[10px] p-2 cursor-pointer shadow-md">
            <img src={CartIcon} />
            <Button children="კალათა" />
          </div>
          {isLoggedIn ? (
            <div className="bg-white flex-row w-32 opacity-80 rounded-lg flex items-center justify-center gap-[10px] p-2 cursor-pointer shadow-md">
              <img src={UserIcon} />
              <Button children="პროფილი" />
            </div>
          ) : (
            <div className="bg-white flex-row w-32 opacity-80 rounded-lg flex items-center justify-center gap-[10px] p-2 cursor-pointer shadow-md">
              <img src={UserIcon} />
              <Button onClick={handleShow} children="შესვლა" />
            </div>
          )}
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
        </div>
      </div>
    </header>
  );
}