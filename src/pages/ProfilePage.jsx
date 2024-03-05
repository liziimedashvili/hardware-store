/* eslint-disable no-unused-vars */
import React from "react";
import ProfileIcon from "../assets/profile.svg";
export default function ProfilePage() {
  return (
    <div className="custom-container">
      <div className="flex flex-row items-center gap-1 border-b border-gray-200 pb-4">
        <img src={ProfileIcon} alt="profile photo" />
        <div></div>
        <h1 className="text-black font-bold text-2xl ">გამარჯობა </h1>
      </div>
      <div>
        <div>
          <span>პროფილის რედაქტირება</span>
          <span>შეკვეთები</span>
          <span>შეკვეთები</span>
        </div>
        <div></div>
      </div>
    </div>
  );
}
