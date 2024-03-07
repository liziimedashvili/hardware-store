/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import logout from "../assets/images/images.png";
export default function Logout() {
  const navigation = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("accessToken");
    navigation("/");
  };

  return (
    <div className="mt-10 ml-5">
      <h2 className="border-b-2 text-lg font-bold w-60 border-orange-600">
        გამოსვლა
      </h2>
      <div className="flex items-center justify-center gap-12 mt-10">
        <div>
          <img src={logout} className="w-24 h-24" />
        </div>
        <div className="flex  items-center mt-10 flex-col gap-4">
          <span className="font-bold text-lg">გსურთ გამოსვლა?</span>
          <div
            onClick={handleLogOut}
            className="text-orange-600 cursor-pointer text-lg w-40 text-center shadow-lg rounded-md p-2"
          >
            გამოსვლა
          </div>
        </div>
      </div>
    </div>
  );
}
